import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db

from schema import RuleImage as SchemaRuleImage

from models import RuleImage as RuleImage

import os
from dotenv import load_dotenv

load_dotenv('.env')


app = FastAPI()

# to avoid csrftokenError
app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URL'])

@app.get("/")
async def root():
    return {"message": "hello world"}


@app.post('/rule_image/', response_model=SchemaRuleImage)
async def ruleImage(ruleImage: SchemaRuleImage):
    db_ruleImage= RuleImage(container_link=ruleImage.container_link, image_link=ruleImage.image_link, name = ruleImage.name)
    db.session.add(db_ruleImage)
    db.session.commit()
    return db_ruleImage

@app.get('/rule_image/')
async def ruleImage():
    ruleImage = db.session.query(RuleImage).all()
    return ruleImage


  
# To run locally
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)