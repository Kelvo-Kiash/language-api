from textblob import TextBlob

#use default textblob part os speech tagger
def tagger(text):
    blob = TextBlob(text)
    tags = blob.tags
    noun_phrases = blob.noun_phrases
    results = {"tags":tags, "noun_phrases":noun_phrases}
    print results
    return results



if __name__ == "__main__":
    tagger("hellow there peter how are you doing")