from textblob import TextBlob


def translator(text, from_lang, to):
    blob = TextBlob(text)
    res = blob.translate(from_lang=from_lang, to=to)
    return {"text":text, "from_lang":from_lang, "to_lang":to, "result":res}


if __name__ == "__main__":
    print translator("hellow there how are you peter", "en", "de")