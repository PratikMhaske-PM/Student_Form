from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

class AdmissionCreate(BaseModel):
    name: str
    age: int
    gender: str
    branch: str
    admission_date: str

class AdmissionResponse(BaseModel):
    id: int
    name: str
    age: int
    gender: str
    branch: str
    admission_date: str
    created_at: datetime

    class Config:
        from_attributes = True
