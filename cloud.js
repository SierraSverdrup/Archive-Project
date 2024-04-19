// Load the JSON data and generate the word cloud
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Extract participants from JSON data
    const participants = data;

    // Create an array of words based on attribute values for all participants
    const words = participants.flatMap(participant => {
      const themes = participant.themes;

      // Convert each theme to a word object with its weight
      return themes.map((theme, index) => {
        const attributeName = [
          'Community', 'Religion', 'Support', 'Diversity', 'Inclusive',
          'Connection', 'Family', 'Belonging', 'Don’t belong', 'Balance',
          'Understanding', 'Access', 'Financial', 'Skill', 'Work'
        ][index];
        return { text: attributeName, weight: theme || 0 }; // Use the theme value as weight, or default to 0 if null
      });
    });

    // Generate the word cloud
    WordCloud(document.getElementById('wordcloud'), {
      list: words
    });
  });