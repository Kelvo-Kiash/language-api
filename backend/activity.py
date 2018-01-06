from celery import Celery
from utils.classifier import train_cl


app = Celery(__name__, backend='rpc://', broker='redis://localhost:6379/')

@app.task 
def activity(*args, **kwargs):
    try:
        cl = train_cl()
        return cl.classify(*args)
    except Exception:
        return 



