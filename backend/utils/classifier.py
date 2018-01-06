import random
import pickle

from textblob.classifiers import NaiveBayesClassifier
from load_data import load_data
random.seed(1)

#load all the training data
def load_all_data():
    all_sentences = load_data("pos") + load_data("neg") 
    random.shuffle(all_sentences)
    all_sentences = all_sentences[:1000]
    split_ratio = (len(all_sentences)/4) * 3
    return all_sentences[:split_ratio], all_sentences[split_ratio:]

#train_set, test_set data
train_set, test_set = load_all_data()

#train a classifier 
def train_cl():
    cl = NaiveBayesClassifier(train_set)
    return cl

#test the classifier
def test_cl():
    cl = train_cl()
    print "i hate it when it rains",    "===>",    cl.classify("i hate it when it rains"), "===>"
    prob_dist = cl.prob_classify("i hate it when it rains")
    print round(prob_dist.prob("pos"), 2)
    print round(prob_dist.prob("neg"), 2)
         
#dump the classifier in pickle
def generate_cl_pickle():
    print "opening pickle file"
    fil = open('naive_classifier.pickle', 'wb')
    print "dumping naive classifier to pickle"
    classifier = train_cl()
    pickle.dump(classifier, fil)
    print "done dumping"
    fil.close()



if __name__ == '__main__':
    test_cl()