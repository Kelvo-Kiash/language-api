import flask
from flask import Flask, request, jsonify, template_rendered
from utils.classifier import train_cl
from utils.pos import tagger
from utils.language_detect import detector
from utils.sheng import sheng_handler
from utils.translate import translator
from activity import activity




from flask_cors import CORS, cross_origin




app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET'])
def index():
    return "ok"


@app.route('/translate/', methods=['PUT'])
@cross_origin(origin="*")
def translate():
    text = request.json["text"]
    to = request.json["to"]
    from_lang = request.json["from"]
    response = {"response": translator(text, from_lang, to)
        }
    return jsonify(response)


@app.route('/language/', methods=['PUT'])
@cross_origin(origin="*")
def language():
    text = request.json["text"]
    response = {"response": detector(text)
        }
    return jsonify(response)

@app.route('/sheng/', methods=['PUT'])
@cross_origin(origin="*")
def sheng():
    cl = train_cl().classify(request.json["text"])
    prob_dist = cl.prob_classify(request.json["text"])

    response = {"text":request.json["text"],
        'neg':round(prob_dist.prob("neg"), 2),
        'pos':round(prob_dist.prob("pos"), 2)
    }
    return jsonify(response)


@app.route('/sentiments/', methods=['PUT'])
@cross_origin(origin="*")
def sentiments():
    cl = train_cl().classify(request.json["text"])
    prob_dist = cl.prob_classify(request.json["text"])

    response = {"text":request.json["text"],
        'neg':round(prob_dist.prob("neg"), 2),
        'pos':round(prob_dist.prob("pos"), 2)
    }
    return jsonify(response)


@app.route('/pos/', methods=['PUT'])
@cross_origin(origin="*")
def pos():
    text = request.json["text"]
    response = {"response": tagger(text)
        }
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)