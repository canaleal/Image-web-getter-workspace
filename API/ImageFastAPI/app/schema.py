# build a schema using pydantic
from pydantic import BaseModel

class RuleImage(BaseModel):
    container_link : str
    image_link : str
    name : str
   
    class Config:
        orm_mode = True