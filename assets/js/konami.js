    <script>
        // Konami Code Easter Egg
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiCodePosition = 0;

        document.addEventListener('keydown', function(e) {
            // Get the key that was pressed
            const key = e.key;
            
            // Get the key from konami code that should match
            const requiredKey = konamiCode[konamiCodePosition];
            
            // Check if the key matches
            if (key === requiredKey) {
                // Move to the next key in the konami code sequence
                konamiCodePosition++;
                
                // If the full sequence is matched, reveal the easter egg
                if (konamiCodePosition === konamiCode.length) {
                    revealEasterEgg();
                    konamiCodePosition = 0;
                }
            } else {
                // Reset position if there's a mismatch
                konamiCodePosition = 0;
            }
        });

        // Easter egg reveal function
        function revealEasterEgg() {
            const easterEgg = document.querySelector('.easter-egg');
            easterEgg.classList.add('revealed');
            
            // Hide again after 10 seconds
            setTimeout(() => {
                easterEgg.classList.remove('revealed');
            }, 10000);
        }
    </script>
    