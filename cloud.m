 % Provided data
 terms = {'Community', 'Religion', 'Support', 'Diversity', 'Inclusive', 'Connection', 'Family', 'Belonging', 'Lack of Belonging', 'Balance', 'Understanding', 'Access', 'Financial', 'Skill', 'Work'};
 wordCount = [22,7,17,19,4,16,2,11,8,3,6,22,10,8,9];


 
 % Create a word cloud
 figure;
 wordcloud(terms, wordCount, 'Color', 'black', 'HighlightColor', '#006a8e', 'Shape', 'oval');

 saveas(gca,'Images/wordcloud.png');