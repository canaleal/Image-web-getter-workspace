# build a schema using pydantic
from datetime import time
from pydantic import BaseModel

class RuleImage(BaseModel):
    container_link : str
    image_link : str
    name : str
    class Config:
        orm_mode = True
        
class RuleImageFull(RuleImage):
    id : int
    container_link : str
    image_link : str
    created_at : time
    name : str
    class Config:
        orm_mode = True