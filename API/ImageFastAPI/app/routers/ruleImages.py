
from fastapi_sqlalchemy import  db
from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
import app.schema as schema
from typing import Optional, List
from app.models import RuleImage as ModelRuleImage


router = APIRouter(
    prefix='/rule_images',
    tags=['rule_images']
)

@router.post('/', response_model=schema.RuleImageFull)
async def ruleImage(ruleImage: schema.RuleImage):
    db_ruleImage= schema.RuleImage(container_link=ruleImage.container_link, image_link=ruleImage.image_link, name = ruleImage.name)
    db.session.add(db_ruleImage)
    db.session.commit()
    return db_ruleImage

@router.get('/', response_model=List[schema.RuleImageFull])
async def ruleImage():
    ruleImages = db.session.query(ModelRuleImage).all()
    if not ruleImages:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No ruleImages found")
      
    return ruleImages

@router.get('/{id}', response_model=schema.RuleImageFull)
async def ruleImage(id: int):
    ruleImage = db.session.query(ModelRuleImage).filter(ModelRuleImage.id == id).first()
    if not ruleImage:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No ruleImage with id: {id} found")
    return ruleImage

@router.put('/{id}', response_model=schema.RuleImageFull)
async def ruleImage(id: int, ruleImage: schema.RuleImage):
    ruleImage = db.session.query(ModelRuleImage).filter(ModelRuleImage.id == id).first()
    if ruleImage == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No ruleImage with id: {id} found")
    
    ruleImage.delete(synchronize_session=False)
    db.commit()
    
    return Response(status_code=status.HTTP_204_NO_CONTENT)