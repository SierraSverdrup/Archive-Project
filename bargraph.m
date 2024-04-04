% Sample data (replace with your actual data)
terms = {'Discrimination', 'Exclusion', 'Difficulty Connecting', 'Cultural Representation Wanted', 'Financal Difficulties'};
interviewees = {'Garrett', 'Bryan', 'Mae', 'Daniel', 'Bolivar', 'Javier', 'Fernando', 'Jazmin', 'Sanjida'};
themes = {'First Generation Student', 'Bilingual', 'Multicultural', 'Economic Struggle', 'Family Values', 'Language Barrier', 'Religious', 'LGBTQ+'};
wordCount = [
	1 3 0 1 3 1 0 2;
	4 0 2 1 6 0 2 0;
	2 2 3 0 1 1 2 1;
	3 0 8 2 1 5 2 4;
	2 3 6 1 2 9 1 2; 
	
];
 
% Reverse the order of terms
terms = flip(terms);
 
% Stacked bar plot
figure;
barh(wordCount(:, end:-1:1), 'stacked');
set(gca, 'YTickLabel', terms, 'YTick', 1:numel(terms), 'FontSize', 8);
xlabel('Frequency');
ylabel('Experiences');
title('Community Experiences');
legend(flip(themes), 'Location', 'BestOutside');

saveas(gca,'Images/barchart.png');