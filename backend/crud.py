from sqlalchemy.orm import Session
import models
import schemas

def create_contact_message(db: Session, contact: schemas.ContactCreate):
    db_contact = models.ContactMessage(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contact_messages(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.ContactMessage).offset(skip).limit(limit).all()

def create_admission(db: Session, admission: schemas.AdmissionCreate):
    db_admission = models.AdmissionApplication(**admission.model_dump())
    db.add(db_admission)
    db.commit()
    db.refresh(db_admission)
    return db_admission

def get_admissions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.AdmissionApplication).offset(skip).limit(limit).all()
