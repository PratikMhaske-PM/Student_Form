from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import crud
import schemas
from database import get_db

router = APIRouter(
    prefix="/api/admission",
    tags=["admission"]
)

@router.post("", response_model=schemas.AdmissionResponse, status_code=status.HTTP_201_CREATED)
def create_admission(admission: schemas.AdmissionCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_admission(db=db, admission=admission)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Database operation failed")

@router.get("", response_model=List[schemas.AdmissionResponse])
def read_admissions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    admissions = crud.get_admissions(db, skip=skip, limit=limit)
    return admissions
