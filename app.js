// জোকের একটি এলোমেলো জেনারেটর ফাংশন
const generateJoke = () => {
    const jokes = [
        "Why don’t skeletons fight each other? They don’t have the guts!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why don’t some couples go to the gym? Because some relationships don’t work out.",
        "What do you call fake spaghetti? An impasta!",
        "What’s orange and sounds like a parrot? A carrot!"
    ];

    // এলোমেলোভাবে একটি জোক নির্বাচন করা
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
};

// বোতামে ক্লিক করলে জোক দেখানোর ইভেন্ট হ্যান্ডলার
document.getElementById('jokeBtn').addEventListener('click', () => {
    const joke = generateJoke();  // জোক জেনারেট করা
    document.getElementById('jokeDisplay').textContent = joke;  // জোক দেখানো
});
