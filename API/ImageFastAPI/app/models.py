from pickle import TRUE
from sqlalchemy.orm import relationship
from sqlalchemy import TIMESTAMP, Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.ext.declarative import declarative_base

Base  = declarative_base()
    
class RuleImage(Base):
    __tablename__ = "rule_general_images"
    
    id = Column(Integer, primary_key=True, nullable=False)
    container_link = Column(String, nullable=False, unique=True)
    image_link = Column(String, nullable=False, unique=True)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text('now()'))
    name = Column(String, nullable=False, unique=True)
    

class GelImage(Base):
    __tablename__ = "gel_general_images"
    
    id = Column(Integer, primary_key=True, nullable=False)
    container_link = Column(String, nullable=False, unique=True)
    image_link = Column(String, nullable=False, unique=True)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text('now()'))
    name = Column(String, nullable=False, unique=True)