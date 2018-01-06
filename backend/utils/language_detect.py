from textblob import TextBlob



def detector(text):
    blob = TextBlob(text)
    print text
    response = {"text":text,
        "language":blob.detect_language()
    }
    print response
    return response


if __name__ == '__main__':
    detector("hellow there")