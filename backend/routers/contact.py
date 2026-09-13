from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import crud
import models
import schemas
from database import get_db

router = APIRouter(
    prefix="/api/contact",
    tags=["contact"]
)

@router.post("", response_model=schemas.ContactResponse, status_code=status.HTTP_201_CREATED)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_contact_message(db=db, contact=contact)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Database operation failed")

@router.get("", response_model=List[schemas.ContactResponse])
def read_contacts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    contacts = crud.get_contact_messages(db, skip=skip, limit=limit)
    return contacts
