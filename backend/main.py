from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import contact
from database import engine
import models

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="School Management API")

# Configure CORS
origins = [
    "http://localhost:5173",  # Vite default port
    "http://localhost:3000",
    "https://frontend-psi-six-69.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

from routers import admission
app.include_router(contact.router)
app.include_router(admission.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
