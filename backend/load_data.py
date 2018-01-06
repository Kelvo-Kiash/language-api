import os


#load movie_reviews data one directory up
def load_data(folder):
    dir_w = os.path.abspath(os.curdir)
    sentences = []
    os.chdir("..")
    os.chdir(os.path.join("movie_reviews", folder))
    files = os.listdir(os.getcwd())
    for fil in files:
        sentences_fil = open(fil, 'r').readlines()
        for sentence in sentences_fil:
            sentence_tuple = (sentence, folder)
            sentences.append(sentence_tuple)
    os.chdir(dir_w)
    return sentences