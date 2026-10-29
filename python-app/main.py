from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def root(): return {"service": "FastAPI Variant 24"}
@app.get("/python/")
def via_proxy(): return {"service": "FastAPI via /python/"}
