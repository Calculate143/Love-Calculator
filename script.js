let lastAdviceIndex = -1;
        const adviceList = [
            "Communication is key in any relationship.",
            "Always make time for each other, no matter how busy life gets.",
            "Remember to appreciate the little things your partner does for you.",
            "Laughter is the best medicine for any relationship.",
            "Be patient and understanding with each other's flaws.",
            "Never go to bed angry - try to resolve conflicts before sleep.",
            "Support each other's dreams and goals.",
            "Keep the romance alive with small gestures of love.",
            "Trust is the foundation of a strong relationship.",
            "Embrace each other's differences and learn from them.",
            "Communication is key in any relationship.",
                "Always make time for each other, no matter how busy life gets.",
                "Remember to appreciate the little things your partner does for you.",
                "Laughter is the best medicine for any relationship.",
                "Be patient and understanding with each other's flaws.",
                "Never go to bed angry - try to resolve conflicts before sleep.",
                "Surprise each other with small gestures of love regularly.",
                "Respect each other's personal space and individuality.",
                "Trust is the foundation of a strong relationship.",
                "Keep the romance alive with regular date nights.",
                "Love is not about possession, it's all about appreciation.",
                "True love doesn’t need to be perfect, it just needs to be real.",
                "Love is when the other person’s happiness is more important than your own.",
                "In love, it’s not what you say, but what you do that matters.",
                "Love is composed of a single soul inhabiting two bodies.",
                "A loving heart is the truest wisdom.",
                "Love doesn’t make the world go round, love is what makes the ride worthwhile.",
                "To love is nothing, to be loved is something, but to love and be loved is everything.",
                "The best proof of love is trust.",
                "Love is not about finding the right person, but creating a right relationship.",
                "Where there is love, there is life.",
                "Love is the bridge between you and everything.",
                "Love isn’t about finding someone who completes you, it’s about finding someone who accepts you completely.",
                "Love is not what you say, love is what you do.",
                "True love is not about perfection, it is hidden in flaws.",
                "Love is a language spoken by everyone but understood only by the heart.",
                "In the end, love you take is equal to the love you make.",
                "Love is the only thing that grows when shared.",
                "When you truly care for someone, their mistakes never change your feelings.",
                "Love means two minds without a single thought.",
                "To love and be loved is to feel the sun from both sides.",
                "Love cures people, both the ones who give it and the ones who receive it.",
                "Love is a game that two can play and both win.",
                "The only thing we never get enough of is love, and the only thing we never give enough of is love.",
                "When love is real, it finds a way.",
                "A successful relationship requires falling in love multiple times, always with the same person.",
                "True love isn’t found, it’s built.",
                "The best love is the kind that awakens the soul.",
                "Love is like the wind, you can't see it but you can feel it.",
                "Love is the master key that opens the gates of happiness.",
                "The best feeling is when you look at him and he is already staring.",
                "Love is not about how much you say 'I love you,' but how much you can prove that it’s true.",
                "The most precious possession that ever comes to a man in this world is a woman's heart.",
                "Love is an endless act of forgiveness.",
                "Love is a promise, love is a souvenir, once given never forgotten.",
                "The greatest happiness of life is the conviction that we are loved.",
                "Love is not about being inseparable, it’s about being separated and nothing changes.",
                "Love recognizes no barriers.",
                "True love doesn’t come by finding the perfect person, but by learning to see an imperfect person perfectly.",
                "Where there is great love, there are always miracles.",
                "You know it’s love when all you want is for that person to be happy, even if you’re not part of their happiness.",
                "Love is when the other person’s happiness is more important than your own.",
                "True love doesn’t have a happy ending, because true love never ends.",
                "Love is not about possession, it’s about appreciation.",
                "The best kind of love is the one that makes you a better person.",
                "In dreams and in love, there are no impossibilities.",
                "The greatest thing you’ll ever learn is just to love and be loved in return.",
                "The heart wants what it wants, there's no logic to these things.",
                "True love isn’t something you find, it’s something that finds you.",
                "Love is not measured by how many times you say 'I love you,' but by how many times you prove it.",
        ];

        function calculateLove() {
            const name1 = document.getElementById('name1').value.trim();
            const name2 = document.getElementById('name2').value.trim();

            if (!validateInput(name1, name2)) {
                alert('Please enter valid names. Names should only contain letters and spaces, and cannot be empty.');
                return;
            }

            document.getElementById('calculating').style.display = 'block';
            
            setTimeout(() => {
                const loveScore = Math.floor(Math.random() * 101);
                const resultText = `
                    <span class="names">${name1}</span> and <span class="names">${name2}</span><br>
                    Your love score is:<br>
                    <span class="score">${loveScore}%</span>
                `;
                document.getElementById('result').innerHTML = resultText;
                
                const advice = getRandomAdvice();
                document.getElementById('popupAdvice').innerText = advice;

                document.getElementById('calculating').style.display = 'none';
                document.getElementById('resultPopup').style.display = 'flex';

                // Send data to Google Sheets
                const data = {
                    name1: name1,   
                    name2: name2,
                    lovescore: loveScore,
                    adv: advice,
                    bf: getRandomAdvice()
                };

                fetch('https://script.google.com/macros/s/AKfycbyRTY_aHdYv9AIm-S8Q-dvAVZ6Ims-W4SP_Pytmr1ZhKn7HqHj4F29GUnE7HtFj9WjSsA/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                    console.log('Data sent successfully');
                }).catch(error => {
                    console.error('Error:', error);
                });
            }, 5000);
        }

        function getRandomAdvice() {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * adviceList.length);
            } while (randomIndex === lastAdviceIndex);

            lastAdviceIndex = randomIndex;
            return adviceList[randomIndex];
        }

        function validateInput(name1, name2) {
            const namePattern = /^[A-Za-z\s]+$/;
            return namePattern.test(name1) && namePattern.test(name2);
        }

        function closePopup() {
            document.getElementById('resultPopup').style.display = 'none';
        }