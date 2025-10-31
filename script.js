// Social Proof Notification
let popupTimeout;
let socialProofInterval;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSocialProofNotifications();
    initStickyBanner();
    initFAQAccordion();
    initDailyCountdown();
    updateWorkshopDates();
});

// Social Proof Notifications
function initSocialProofNotifications() {
    const popup = document.getElementById('socialProof');
    if (!popup) {
        console.log('Social proof popup not found');
        return;
    }
    
    console.log('Social proof notifications initialized');
    
    // Show popup after 3 seconds
    setTimeout(() => {
        console.log('Showing first notification');
        showSocialProofNotification();
    }, 3000);
    
    // Show popup every 4 seconds
    socialProofInterval = setInterval(() => {
        if (!popup.classList.contains('show')) {
            console.log('Showing scheduled notification');
            showSocialProofNotification();
        }
    }, 4000);
}

function showSocialProofNotification() {
    const popup = document.getElementById('socialProof');
    if (!popup) {
        console.log('Popup not found in showSocialProofNotification');
        return;
    }
    
    console.log('Showing social proof notification');
    
    const names = [
        'Deepak registered for workshop', 'Priya registered for workshop', 
        'Rajesh registered for workshop', 'Anita registered for workshop',
        'Vikram registered for workshop', 'Sneha registered for workshop',
        'Manish registered for workshop', 'Kavita registered for workshop',
        'Rohit registered for workshop', 'Sunita registered for workshop',
        'Amit registered for workshop', 'Meera registered for workshop'
    ];
    
    const times = [
        '2 minutes ago', '3 minutes ago', '4 minutes ago', 
        '5 minutes ago', '7 minutes ago', '9 minutes ago',
        '12 minutes ago', '15 minutes ago', '18 minutes ago'
    ];
    
    // Update notification content
    const nameEl = popup.querySelector('.notification-name');
    const timeEl = popup.querySelector('.notification-time');
    
    if (nameEl) nameEl.textContent = names[Math.floor(Math.random() * names.length)];
    if (timeEl) timeEl.textContent = times[Math.floor(Math.random() * times.length)] + ' | Verified by Razorpay';
    
    // Show popup
    popup.classList.add('show');
    console.log('Popup class added:', popup.classList.contains('show'));
    
    // Auto-hide after 6 seconds
    popupTimeout = setTimeout(() => {
        closePopup();
    }, 6000);
}

function closePopup() {
    const popup = document.getElementById('socialProof');
    if (popup) {
        popup.classList.remove('show');
    }
    if (popupTimeout) {
        clearTimeout(popupTimeout);
    }
}

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Close popup when X is clicked
window.closePopup = closePopup;

// Sticky Banner
function initStickyBanner() {
    const banner = document.getElementById('stickyBanner');
    if (!banner) {
        console.log('Sticky banner not found');
        return;
    }
    
    console.log('Sticky banner initialized');
    
    let bannerShown = false;
    
    // Show banner as soon as user starts scrolling
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        console.log('Scroll position:', scrollTop);
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Show banner as soon as user starts scrolling (any amount > 0)
        if (scrollTop > 0 && !bannerShown) {
            // Small delay for smoother animation
            scrollTimeout = setTimeout(() => {
                banner.classList.add('show');
                bannerShown = true;
                console.log('Sticky banner shown - user started scrolling');
            }, 100);
        }
        
        // Hide banner only when at the very top
        if (scrollTop <= 0 && bannerShown) {
            banner.classList.remove('show');
            bannerShown = false;
            console.log('Sticky banner hidden - back at top');
        }
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

    // Daily Countdown Timer
    function initDailyCountdown() {
        const deadlineDateElement = document.getElementById('deadlineDate');
        const bannerDeadlineDateElement = document.getElementById('bannerDeadlineDate');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (!deadlineDateElement || !hoursElement || !minutesElement || !secondsElement) {
            console.log('Countdown elements not found');
            return;
        }
        
        function getNextWeekendDate() {
            const now = new Date();
            const currentYear = now.getFullYear();
            
            // First, check if October 25 of current year has passed
            const october25 = new Date(currentYear, 9, 25, 23, 59, 59, 999); // Month is 0-indexed, so 9 = October
            
            if (now <= october25) {
                // If we're before or on October 25, use that date
                return october25;
            }
            
            // If October 25 has passed, calculate next weekend (Sunday)
            const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
            
            // Calculate days until next Sunday (0)
            let daysUntilSunday = (7 - currentDay) % 7;
            
            // If today is Sunday, check if it's before 7:00 PM
            if (daysUntilSunday === 0) {
                // Today is Sunday - check if we're before 7:00 PM
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();
                
                // If it's before 7:00 PM on Sunday, deadline is today at 7:00 PM
                if (currentHour < 19 || (currentHour === 19 && currentMinute === 0)) {
                    daysUntilSunday = 0; // Use today
                } else {
                    // It's past 7:00 PM on Sunday, use next Sunday
                    daysUntilSunday = 7;
                }
            }
            
            const nextWeekend = new Date(now);
            nextWeekend.setDate(now.getDate() + daysUntilSunday);
            nextWeekend.setHours(19, 0, 0, 0); // 7:00 PM (19:00)
            
            return nextWeekend;
        }
        
        function updateCountdown() {
            const now = new Date();
            const deadline = getNextWeekendDate();
            const timeLeft = deadline - now;
            
            if (timeLeft > 0) {
                const hours = Math.floor(timeLeft / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                
                hoursElement.textContent = hours.toString().padStart(2, '0');
                minutesElement.textContent = minutes.toString().padStart(2, '0');
                secondsElement.textContent = seconds.toString().padStart(2, '0');
                
                // Update deadline date display with time
                const deadlineDate = deadline.toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long'
                });
                deadlineDateElement.textContent = `${deadlineDate} at 7:00 PM`;
                
                // Update banner deadline date (short format: "3 NOV")
                if (bannerDeadlineDateElement) {
                    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                    const bannerDate = `${deadline.getDate()} ${monthNames[deadline.getMonth()]}`;
                    bannerDeadlineDateElement.textContent = bannerDate;
                }
            } else {
                // If deadline has passed, get the next weekend
                const nextWeekend = getNextWeekendDate();
                const timeLeftNext = nextWeekend - now;
                
                const hours = Math.floor(timeLeftNext / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeftNext % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeftNext % (1000 * 60)) / 1000);
                
                hoursElement.textContent = hours.toString().padStart(2, '0');
                minutesElement.textContent = minutes.toString().padStart(2, '0');
                secondsElement.textContent = seconds.toString().padStart(2, '0');
                
                const deadlineDate = nextWeekend.toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long'
                });
                deadlineDateElement.textContent = `${deadlineDate} at 7:00 PM`;
                
                // Update banner deadline date (short format: "3 NOV")
                if (bannerDeadlineDateElement) {
                    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                    const bannerDate = `${nextWeekend.getDate()} ${monthNames[nextWeekend.getMonth()]}`;
                    bannerDeadlineDateElement.textContent = bannerDate;
                }
            }
        }
        
        // Update immediately
        updateCountdown();
        
        // Update every second
        setInterval(updateCountdown, 1000);
    }

// Update Workshop Dates
function updateWorkshopDates() {
    const workshopDateElement = document.getElementById('workshopDate');
    if (!workshopDateElement) {
        console.log('Workshop date element not found');
        return;
    }
    
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
    
    // Calculate days until next Sunday
    let daysUntilSunday = (7 - currentDay) % 7;
    if (daysUntilSunday === 0) {
        daysUntilSunday = 7; // If today is Sunday, get next Sunday
    }
    
    // Calculate Sunday and Monday dates
    const sunday = new Date(now);
    sunday.setDate(now.getDate() + daysUntilSunday);
    
    const monday = new Date(sunday);
    monday.setDate(sunday.getDate() + 1);
    
    // Format dates: "25th & 26th Oct"
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }
    
    const sundayDay = sunday.getDate();
    const mondayDay = monday.getDate();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const sundayMonth = monthNames[sunday.getMonth()];
    const mondayMonth = monthNames[monday.getMonth()];
    
    // Format dates, handling month changes
    let formattedDate;
    if (sunday.getMonth() === monday.getMonth()) {
        // Same month: "25th & 26th Oct"
        formattedDate = `${sundayDay}${getOrdinalSuffix(sundayDay)} & ${mondayDay}${getOrdinalSuffix(mondayDay)} ${sundayMonth}`;
    } else {
        // Different months: "30th Nov & 1st Dec"
        formattedDate = `${sundayDay}${getOrdinalSuffix(sundayDay)} ${sundayMonth} & ${mondayDay}${getOrdinalSuffix(mondayDay)} ${mondayMonth}`;
    }
    
    workshopDateElement.textContent = formattedDate;
}