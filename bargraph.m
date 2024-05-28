% Sample data (replace with your actual data)
terms = {'Cultural Represntation Wanted', 'Language Challenges', 'Difficulty Connecting', 'Additional Challenges', 'Busy/External Responsibility'};
interviewees = {'Garrett', 'Bryan', 'Mae', 'Daniel', 'Bolivar', 'Javier', 'Fernando', 'Jazmin', 'Sanjida'};
themes = {'First Generation Student', 'LGBTQ+', 'Immigrant', 'Veteran', 'Economic Struggle', 'Family Values', 'Parent'}; 

wordCount = [
	3 1 1 2 3 1 1
	3 1 1 2 2 0 2
	4 2 0 2 2 1 1
	1 0 2 2 2 0 1
	2 2 2 1 3 2 0  
	
];
 
% Reverse the order of terms
terms = flip(terms);
 
% Stacked bar plot
figure;
barh(wordCount(:, end:-1:1), 'stacked');
set(gca, 'YTickLabel', terms, 'YTick', 1:numel(terms), 'FontSize', 8);
xlabel('Frequency');
ylabel(' ');
title(' ');
legend(flip(themes), 'Location', 'BestOutside');

saveas(gca,'Images/barchart.png')