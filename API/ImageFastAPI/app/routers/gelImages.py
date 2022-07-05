
from fastapi_sqlalchemy import  db
from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
import app.schema as schema
from typing import Optional, List
from app.models import GelImage as ModelGelImage


router = APIRouter(
    prefix='/gel_images',
    tags=['gel_images']
)

@router.post('/', response_model=schema.GelImageFull)
async def gelImage(gelImage: schema.GelImage):
    db_gelImage= schema.GelImage(container_link=gelImage.container_link, image_link=gelImage.image_link, name = gelImage.name)
    db.session.add(db_gelImage)
    db.session.commit()
    return db_gelImage

@router.get('/', response_model=List[schema.GelImageFull])
async def gelImage():
    gelImages = db.session.query(ModelGelImage).all()
    if not gelImages:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No gelImages found")
      
    return gelImages

@router.get('/{id}', response_model=schema.GelImageFull)
async def gelImage(id: int):
    gelImage = db.session.query(ModelGelImage).filter(ModelGelImage.id == id).first()
    if not gelImage:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No gelImage with id: {id} found")
    return gelImage

@router.put('/{id}', response_model=schema.GelImageFull)
async def gelImage(id: int, gelImage: schema.GelImage):
    gelImage = db.session.query(ModelGelImage).filter(ModelGelImage.id == id).first()
    if gelImage == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No gelImage with id: {id} found")
    
    gelImage.delete(synchronize_session=False)
    db.commit()
    
    return Response(status_code=status.HTTP_204_NO_CONTENT)