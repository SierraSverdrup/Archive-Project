 % Provided data
 terms = {'Family Focus', 'Community Support', 'Religion', 'Learning Aid', 'Passion', 'Analytical Skills', 'Mathematical Interest', 'Impact Lives', 'Sense of Duty', 'Engaging', 'Prior Knowledge', 'Heritage', 'Mentor', 'Language Barriers', 'Diversity', 'Valued Opinions', 'Culture', 'Networking', 'Social Interaction', 'Strong Work Ethic', 'Awareness', 'Parental Influence', 'Educational Resources', 'Financial Constraints', 'Community Aid', 'Persistence', 'Professional Growth', 'Academic Support', 'Sense of Belonging', 'Outsider', 'Time Constraints', 'Cultural shock'};
 wordCount = [16, 13, 7, 15, 3, 4, 5, 18, 5, 9, 14, 5, 8, 6, 18, 13, 14, 10, 16, 5, 16, 22, 9, 4, 14, 12, 16, 22, 15, 6, 1, 3];
  
 % Create a word cloud
 figure;
 wordcloud(terms, wordCount);
  
 % Adjust the appearance of the word cloud (optional)
 title('Word Cloud for Short Terms', 'FontSize', 14);

 %saveas(gca,'Images/wordcloud.png');
 