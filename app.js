document.addEventListener('DOMContentLoaded', () => {
    
    // Create a GSAP Timeline for smooth, sequenced animations
    const tl = gsap.timeline();

    // 1. Animate the Navigation Bar sliding down
    tl.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    
    // 2. Animate the Main Title (pops up and fades in)
    .from(".anim-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4") // The "-=0.4" makes it start slightly before the previous animation finishes
    
    // 3. Animate the Subtitle text
    .from(".anim-text", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4")
    
    // 4. Animate the Buttons popping in
    .from(".anim-buttons .btn", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2, // This staggers them so they appear one after the other
        ease: "back.out(1.7)" // Adds a slight bounce effect
    }, "-=0.2")

    // 5. Animate the Value Cards at the bottom
    .from(".anim-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.2");

});