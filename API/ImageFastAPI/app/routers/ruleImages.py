
from fastapi_sqlalchemy import  db
from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from app.schema import RuleImage as SchemaRuleImage
from app.schema import RuleImage

from app.models import RuleImage as RuleImage


router = APIRouter(
    prefix='/rule_images',
    tags=['rule_images']
)

@router.post('/', response_model=SchemaRuleImage)
async def ruleImage(ruleImage: SchemaRuleImage):
    db_ruleImage= RuleImage(container_link=ruleImage.container_link, image_link=ruleImage.image_link, name = ruleImage.name)
    db.session.add(db_ruleImage)
    db.session.commit()
    return db_ruleImage

@router.get('/')
async def ruleImage():
    ruleImages = db.session.query(RuleImage).all()
    if not ruleImages:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No ruleImages found")
      
    return ruleImages

