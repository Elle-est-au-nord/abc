import string
import matplotlib.pyplot as plt
import clean_text_class as ct
import numpy as np
import pandas as pd

class analyse_words:
    '''Analyse words 
    in a text file '''
    
    def __init__(self, words):
        self.words = words

    # Methods to count words in a text file
    # Returns a dict with a word as key and
    # its count as value. 

    def words_count(self, words):
        """
        Returns a dictionary with all
        words present in the text
        and their frequency
        """
        l = sorted(words)
        words_dict = {w:l.count(w) for w in l}
        return words_dict


class analyse_letters:
    '''Analyse the number of letters 
    in a text file '''
    
    
    def __init__(self, letters):
        self.letters = letters
        self.alphabet = [l for l in string.ascii_lowercase]

    # Method to count letters in a text file
    # Returns a dict with the letter as key and
    # the count as value. 
    def letters_count(self, letters):
        """
        Returns a dictionary with all
        the letters present in the text
        and their frequency
        """
        l = sorted(letters)
        letters_dict = {a:l.count(a) for a in self.alphabet}
        return letters_dict

    # Methods to retrieve letters frequencies and plot them.
    def letters_freq_mpl(self, letters_dict):
        """
        Returns a list of tuples with all
        the letters and their percentage
        """
        total = sum(letters_dict.values())
        freq_dict = {k:round(v *100./total, 1) for k, v in letters_dict.items()}
        freq_list = sorted(freq_dict.iteritems()) #Keeps the letters ordered
        return freq_list

    def letters_freq_pd(self, letters_dict):
        """Returns a dict with letters as keys
        and their freq as a value."""
        total = sum(letters_dict.values())
        freq_letters = {k:round(v *100./total, 1) for k, v in letters_dict.items()}
        return freq_letters
        
    def plot_letters_mpl(self, data):
        """
        Trying to plot the frequencies
        with matplotlib.
        """
        #d = sorted(dict_freq.iteritems())
        letters, freqs = tuple(x[0] for x in data), tuple(x[1] for x in data)

        ind = np.arange(len(letters))
        width = 0.75
        x_width = ind + width
        
        plt.bar(x_width, freqs, width)
        plt.title("Letters content (in %)")
        plt.xlabel("Letters")
        plt.ylabel("Percent")
        ticks_pos = [i + 1.1 for i in range(len(letters))]
        plt.xticks(ticks_pos, letters)
        plt.axis([0, len(letters) + 1, 0, round(max(freqs)) + 1])
        #plt.plot(range(1, len(freqs) + 1), list(freqs))
        plt.grid(True)
        return plt.show()

    
    def plot_letters_pd(self, data):
        """Takes in the result of letters_count 
        and returns a Pandas dataframe."""
        alphabet, letters = self.alphabet, data.values()
        pass

if __name__ == "__main__":
    test = ct.clean_text('books/test2.txt')
    my_text = test.remove_punctuation(test.remove_chapters(test.remove_metadata(test.text)))
    
    my_words = test.whole_text_words(my_text)
    cw = analyse_words(my_words)
    #print cw.words_count(cw.words)
    
    my_letters = test.text_letters(my_text)
    cl = analyse_letters(my_letters)
    l_freq = cl.letters_freq_mpl(cl.letters_count(cl.letters))

    #print l_freq
    #cl.plot_letters_mpl(l_freq)
