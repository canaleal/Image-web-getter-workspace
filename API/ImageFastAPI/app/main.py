import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware
from app.routers import ruleImages

import os
from dotenv import load_dotenv
load_dotenv('.env')


app = FastAPI()
app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URL'])


@app.get("/")
async def root():
    return {"message": "hello world"}

app.include_router(ruleImages.router)
  
# To run locally
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)