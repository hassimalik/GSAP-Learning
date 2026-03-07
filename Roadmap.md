# 🎬 GSAP Complete Roadmap — Beginner to Awwwards Engineer

> **Rules:** 1 hour/day · All practice in `.jsx / .tsx` · Real-world Next.js + React apps · Goal = Full command over any animation on earth

---

## 📌 Table of Contents

- [Phase 1 — Setup & Basics (Day 1–7)](#phase-1--setup--basics-day-17)
- [Phase 2 — Easing, Stagger & Control (Day 8–14)](#phase-2--easing-stagger--control-day-814)
- [Phase 3 — Timeline (Day 15–21)](#phase-3--timeline-day-1521)
- [Phase 4 — useGSAP & Refs in React (Day 22–28)](#phase-4--usegsap--refs-in-react-day-2228)
- [Phase 5 — ScrollTrigger (Day 29–42)](#phase-5--scrolltrigger-day-2942)
- [Phase 6 — Advanced ScrollTrigger (Day 43–56)](#phase-6--advanced-scrolltrigger-day-4356)
- [Phase 7 — Text Animations (Day 57–63)](#phase-7--text-animations-day-5763)
- [Phase 8 — SVG & Path Animations (Day 64–70)](#phase-8--svg--path-animations-day-6470)
- [Phase 9 — 3D & WebGL with Three.js (Day 71–90)](#phase-9--3d--webgl-with-threejs-day-7190)
- [Phase 10 — Storytelling & Awwwards Websites (Day 91–120)](#phase-10--storytelling--awwwards-websites-day-91120)
- [Daily 1 Hour Schedule](#-daily-1-hour-schedule)
- [Resources](#-resources)

---

## PHASE 1 — Setup & Basics (Day 1–7)

> **Goal:** Install GSAP and make things move for the first time in React/Next.js

---

### Day 1 — Installation & Your First Animation

**What to learn:**
- Install GSAP: `npm i gsap`
- Install React helper: `npm i @gsap/react`
- The golden rule in React: **always use `useGSAP()` hook**, never raw `useEffect` for GSAP
- Make one `<div>` fade in from the left

**Practice task:**
Create `AnimatedBox.tsx`. Put a green box on screen. Make it slide in from `x: -200` with `opacity: 0`. Just see it move. That's your win today.

---

### Day 2 — gsap.to() vs gsap.from() vs gsap.fromTo()

**What to learn:**
- `gsap.to()` → animate element TO these values (you define the end)
- `gsap.from()` → animate element FROM these values (you define the start, it ends at natural CSS position)
- `gsap.fromTo()` → you define both start AND end yourself
- When to use which one in real React components

**Practice task:**
Create `ThreeBoxes.tsx`. Three different colored boxes. Box 1 uses `gsap.to()`, Box 2 uses `gsap.from()`, Box 3 uses `gsap.fromTo()`. Write a comment above each one explaining what it does in your own words.

---

### Day 3 — Core Animation Properties

**What to learn:**
- `x` → move left or right (use this instead of `left` CSS)
- `y` → move up or down (use this instead of `top` CSS)
- `opacity` → show and hide (0 = invisible, 1 = visible)
- `scale` → make bigger or smaller (1 = normal, 2 = double, 0 = gone)
- `rotation` → spin in degrees
- `duration` → how many seconds the animation takes
- `delay` → how many seconds to wait before starting

**Practice task:**
Create `CardAnimation.tsx`. Make a card component. On page load, animate it with ALL 6 properties above at once. Then duplicate the card and give each one different values. See how different values create completely different feelings.

---

### Day 4 — The ease Property

**What to learn:**
- Easing is the soul of animation. Without it, animations look like PowerPoint.
- `"none"` → completely linear, robotic
- `"power1.out"` → gentle deceleration
- `"power4.out"` → fast start, smooth stop
- `"bounce.out"` → bounces at the end like a ball
- `"elastic.out(1, 0.3)"` → snaps like a rubber band
- `"back.out(1.7)"` → overshoots slightly then settles
- `"expo.out"` → extremely fast then glides to a stop (very popular in premium sites)
- `.in` = starts slow, `.out` = ends slow, `.inOut` = starts AND ends slow

**Practice task:**
Go to **gsap.com/ease-visualizer** and spend 15 minutes clicking every single ease. Then create `EaseShowcase.tsx` with 8 boxes, each animated with a different ease, all triggered on page load. Watch how completely different they feel.

---

### Day 5 — Targeting Elements with Refs

**What to learn:**
- In React you should use `useRef()` to target elements, not class names or IDs
- `const boxRef = useRef(null)` then `<div ref={boxRef}>`
- Pass the ref directly into GSAP: `gsap.from(boxRef.current, {...})`
- Why refs are safer than class selectors in React (components can re-render)

**Practice task:**
Create `RefPractice.tsx`. Build a button and a box. When the button is clicked, animate the box using a ref. No class names used in the GSAP call at all.

---

### Day 6 — Animating Multiple Elements

**What to learn:**
- You can pass a class name string and GSAP targets ALL matching elements
- You can pass an array of refs
- `stagger` property: each element starts animating slightly after the previous one
- `stagger: 0.1` means 0.1 second gap between each element's animation start

**Practice task:**
Create `NavbarAnimation.tsx`. Make a fake navbar with a logo and 5 nav links. On load, the logo slides in from the left, and the 5 nav links appear one by one from the top using stagger. This is a real-world pattern used on almost every premium website.

---

### Day 7 — Phase 1 Project

**Build:** `HeroSection.tsx`

A complete animated hero section with:
- Logo fades in from top
- Heading slides in from left
- Subheading fades in with a delay
- Button scales up from 0
- Background image or gradient fades in last
- All timed nicely so it feels like a real website

No timeline yet — just individual `gsap.from()` calls with `delay` to sequence them. You will redo this in Phase 3 with Timeline and see how much cleaner it becomes.

---

## PHASE 2 — Easing, Stagger & Control (Day 8–14)

> **Goal:** Control your animations. Pause, play, reverse, repeat, and build reusable animation utilities.

---

### Day 8 — repeat, yoyo, repeatDelay

**What to learn:**
- `repeat: 3` → play the animation 3 times after the first play
- `repeat: -1` → loop forever (great for loading spinners, pulsing elements)
- `yoyo: true` → after each repeat, play the animation in reverse (goes forward then backward)
- `repeatDelay: 1` → wait 1 second between each repeat

**Practice task:**
Create `LoadingSpinner.tsx` and `PulsingButton.tsx`. The spinner rotates forever. The button scales up and down in a yoyo loop. Both are real components you will actually use in projects.

---

### Day 9 — Storing Animations in Variables & Controlling Them

**What to learn:**
- Store the animation: `const anim = gsap.to(ref.current, {...})`
- `anim.pause()` → freeze it
- `anim.play()` → continue from where it paused
- `anim.reverse()` → play backwards
- `anim.restart()` → start from beginning
- `anim.kill()` → completely destroy it (important for cleanup in React)

**Practice task:**
Create `ControlledCard.tsx`. A card that has 4 buttons: Play, Pause, Reverse, Restart. Each button controls the same animation. This teaches you how menus, modals, and interactive animations work in real apps.

---

### Day 10 — onComplete, onStart, onUpdate Callbacks

**What to learn:**
- `onComplete: () => {}` → runs when animation finishes
- `onStart: () => {}` → runs when animation begins
- `onUpdate: () => {}` → runs every single frame while animation is playing
- These are how you chain logic to animations (navigate to next page when animation ends, etc.)

**Practice task:**
Create `PageTransition.tsx`. Animate a full-screen overlay that slides in, and when `onComplete` fires, log "navigate now" to the console. This is the exact pattern used in page transition animations in Next.js apps.

---

### Day 11 — gsap.set()

**What to learn:**
- `gsap.set()` is like `gsap.to()` but with zero duration — it instantly sets properties
- Use it to set the initial state of elements BEFORE you animate them
- Critical in React because components render and then GSAP runs — without `gsap.set()` you sometimes see a flash of the element in its wrong position

**Practice task:**
Create `SetPractice.tsx`. Use `gsap.set()` to hide 5 elements instantly on mount, then after a 1 second delay, animate them all in. Notice there is no flash or jump.

---

### Day 12 — Advanced Stagger

**What to learn:**
- `stagger` can be a number OR an object for advanced control
- `stagger: { each: 0.1, from: "end" }` → animate from last element to first
- `stagger: { each: 0.1, from: "center" }` → animate outward from center
- `stagger: { each: 0.1, from: "random" }` → random order, very cool effect
- `stagger: { each: 0.1, grid: "auto", from: "center" }` → for grid layouts

**Practice task:**
Create `StaggerGrid.tsx`. A 3x3 grid of boxes. Try all 4 `from` values and see how different they look. Then make the one you think looks coolest on a button click. The `from: "random"` stagger is used heavily on Awwwards sites.

---

### Day 13 — Animating CSS Variables & Colors

**What to learn:**
- GSAP can animate colors: `color`, `backgroundColor`, `borderColor`
- GSAP can animate CSS custom properties (variables): `"--my-var": "100px"`
- This is powerful because you can animate a single CSS variable and affect many elements at once via CSS

**Practice task:**
Create `ThemeAnimator.tsx`. A card that smoothly transitions its background color from dark to a gradient color on hover using GSAP. Then animate a CSS variable `--card-glow` from `0px` to `30px` to create a glowing effect.

---

### Day 14 — Phase 2 Project

**Build:** `AnimatedCard.tsx`

A product card (like an e-commerce card) that:
- On page load: card fades in with stagger if there are multiple cards
- On hover: card lifts up (negative y), shadow grows, button appears from bottom
- On hover out: everything reverses smoothly
- Uses stored animation variables and `reverse()` on mouse leave

This is a real component pattern used in e-commerce and SaaS websites.

---

## PHASE 3 — Timeline (Day 15–21)

> **Goal:** Choreograph complex multi-step animations like a movie director

---

### Day 15 — gsap.timeline() Basics

**What to learn:**
- `gsap.timeline()` lets you sequence multiple animations one after another
- Each animation added to the timeline starts AFTER the previous one finishes
- Cleaner than using `delay` on every single animation
- `const tl = gsap.timeline()` then `tl.from(...).from(...).from(...)`

**Practice task:**
Redo your Day 7 HeroSection using a timeline instead of individual animations with delays. You will immediately see how much cleaner and easier to read the code becomes.

---

### Day 16 — Timeline Position Parameter

**What to learn:**
- The position parameter is the 3rd argument in `tl.from(el, vars, POSITION)`
- `"<"` → start at the same time as the PREVIOUS animation (overlap)
- `"<0.3"` → start 0.3 seconds AFTER previous animation started
- `"+=0.5"` → start 0.5 seconds AFTER previous animation ENDS
- `"-=0.3"` → start 0.3 seconds BEFORE previous animation ends (overlap)
- `1.5` → start at exactly 1.5 seconds into the timeline
- This is what gives you precise Hollywood-level control over timing

**Practice task:**
Create `IntroAnimation.tsx`. A sequence: title flies in, then subtitle starts 0.2s later while title is still animating (use `"<0.2"`), then image fades in overlapping with subtitle ending (use `"-=0.3"`). Getting overlaps right makes animations feel premium.

---

### Day 17 — Timeline Labels

**What to learn:**
- You can add named labels to specific points in a timeline
- `tl.addLabel("step2", 1.5)` → marks 1.5 seconds as "step2"
- Then `tl.from(el, vars, "step2")` starts at that label
- You can also `tl.play("step2")` to jump to that point
- Great for complex animations with many steps

**Practice task:**
Create `OnboardingFlow.tsx`. A fake onboarding animation with 3 steps. Each step has a label. Add prev/next buttons that jump the timeline to each label using `tl.play("step1")`, `tl.play("step2")`, etc.

---

### Day 18 — Timeline defaults

**What to learn:**
- `gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } })`
- Any property in `defaults` applies to every animation in that timeline
- You don't have to repeat `duration` and `ease` on every single tween
- Makes code much shorter and consistent

**Practice task:**
Create `MenuAnimation.tsx`. A fullscreen mobile menu that opens with a coordinated animation — overlay fades in, then menu items stagger in one by one, then social icons appear at bottom. Use timeline defaults so every tween shares the same ease.

---

### Day 19 — Nested Timelines

**What to learn:**
- You can add a timeline inside another timeline
- `masterTl.add(childTl, "0.5")` → play the child timeline at 0.5s in master
- This lets you organize complex animations into reusable chunks
- Real-world use: each section of a page has its own timeline, one master timeline controls them all

**Practice task:**
Create `PageLoadSequence.tsx`. Master timeline contains: a loader timeline (spinner + progress bar), then a reveal timeline (overlay slides away), then a hero timeline (content appears). Each is its own function that returns a timeline.

---

### Day 20 — Timeline Callbacks & Pausing

**What to learn:**
- `gsap.timeline({ onComplete: () => {}, onStart: () => {}, paused: true })`
- `paused: true` creates the timeline but doesn't play it yet
- You play it manually: `tl.play()` when you want it to start
- Common pattern: create all timelines on component mount (paused), play them based on user interaction

**Practice task:**
Create `ModalAnimation.tsx`. A modal that has a timeline for opening and a timeline for closing. Both are created paused. Open button plays the open timeline. Close button plays the close timeline. This is the real-world pattern for modal animations.

---

### Day 21 — Phase 3 Project

**Build:** `LandingPageAnimations.tsx`

A full landing page with:
- Page load sequence (loader → reveal → hero)
- Navbar with staggered link animations
- Hero with overlapping text and image animations
- All organized into separate timeline functions
- Clean, readable code using `defaults` and labels

---

## PHASE 4 — useGSAP & Refs in React (Day 22–28)

> **Goal:** Master the RIGHT way to use GSAP in React and Next.js. Avoid all common bugs.

---

### Day 22 — useGSAP() Deep Dive

**What to learn:**
- `useGSAP()` from `@gsap/react` is the correct hook — it automatically cleans up animations when the component unmounts
- It works like `useEffect` but GSAP-aware
- The `scope` parameter: `useGSAP(() => {}, { scope: containerRef })` — all selectors inside only target elements within that container, not the entire page
- Why `scope` is critical in apps with many components using class selectors

**Practice task:**
Create two identical `AnimatedList.tsx` components on the same page. Use `scope` to make sure each one's animations only affect its own elements. Without scope, both components would animate each other's elements — a very common bug.

---

### Day 23 — useGSAP Dependencies

**What to learn:**
- `useGSAP(() => {}, { dependencies: [myState] })` — re-runs the animation when state changes
- Like `useEffect` dependency array but for GSAP
- `revertOnUpdate: true` — revert all animations before re-running when deps change
- Common use: re-animate a list when new data loads

**Practice task:**
Create `FilteredList.tsx`. A list with 3 filter buttons (All, Active, Done). Each time you click a filter, the list re-animates in with a stagger. Use `dependencies: [filter]` and `revertOnUpdate: true`.

---

### Day 24 — useRef Patterns for Complex Components

**What to learn:**
- `useRef` for single elements
- For lists rendered with `.map()`, use a ref callback: `ref={(el) => { itemsRef.current[i] = el }}`
- For container + children, use `containerRef` with scope
- When to use class selectors vs refs (class = simpler but less safe, refs = more verbose but bulletproof)

**Practice task:**
Create `AnimatedList.tsx` where items are rendered with `.map()`. Animate each item individually using the ref array pattern. This is the correct way to animate dynamic lists in React.

---

### Day 25 — Context & Cleanup

**What to learn:**
- Every GSAP animation should be cleaned up when component unmounts
- `useGSAP()` does this automatically via its internal context
- If you ever use raw `useEffect`, you must return a cleanup: `return () => ctx.revert()`
- `gsap.context()` groups all animations so you can kill them all at once with `.revert()`
- This prevents memory leaks in long-running Next.js apps

**Practice task:**
Create `AnimationWithCleanup.tsx`. A component that starts a looping animation on mount. Add a button to unmount it. Open React DevTools and confirm no memory warnings. This teaches you production-level cleanup.

---

### Day 26 — Animating on State Change

**What to learn:**
- How to trigger different animations based on React state (open/closed, active/inactive)
- Pattern: store timeline in a `useRef` (not `useState` — state causes re-renders)
- `const tlRef = useRef(null)` → `tlRef.current = gsap.timeline({paused: true})`
- Then `tlRef.current.play()` or `.reverse()` based on state

**Practice task:**
Create `Accordion.tsx`. Multiple accordion items. Each has its own timeline stored in a ref. Clicking opens with a smooth height + opacity animation. Clicking again reverses it. This is a common interview question for frontend roles.

---

### Day 27 — GSAP with Next.js App Router

**What to learn:**
- In Next.js App Router, components are Server Components by default
- Any component using GSAP must have `"use client"` at the top
- For page transitions in Next.js App Router, use `next/navigation` `useRouter` combined with GSAP
- Pattern: animate page out → then navigate → new page animates in

**Practice task:**
Create two pages in Next.js. Page A has a button that triggers a full-page wipe animation (a div covers the screen), then navigates to Page B, which does a reveal animation. This is the fundamental Next.js page transition pattern.

---

### Day 28 — Phase 4 Project

**Build:** `FullyAnimatedNavbar.tsx`

A production-quality navbar component:
- On load: logo + links animate in with stagger
- Mobile hamburger: opens fullscreen menu with overlay + staggered links
- Close button: reverses the open animation
- On scroll: navbar shrinks (uses `gsap.to` to change height and background)
- Everything properly cleaned up with `useGSAP`
- Works correctly with Next.js `"use client"`

---

## PHASE 5 — ScrollTrigger (Day 29–42)

> **Goal:** Make elements animate based on scroll position. The most important GSAP skill.

---

### Day 29 — ScrollTrigger Setup

**What to learn:**
- `import { ScrollTrigger } from "gsap/ScrollTrigger"`
- `gsap.registerPlugin(ScrollTrigger)` — must do this ONCE, at the top of the file
- Basic usage: add `scrollTrigger: { trigger: elementRef.current }` inside any GSAP call
- The animation plays when the trigger element enters the viewport

**Practice task:**
Create `ScrollReveal.tsx`. 5 cards stacked vertically with lots of space between them. Each card fades in from y:60 when it enters the viewport. This single pattern is used on 90% of all marketing websites.

---

### Day 30 — start & end, markers

**What to learn:**
- `start: "top 80%"` → animation starts when TOP of element hits 80% down the viewport
- `end: "bottom 20%"` → animation ends when BOTTOM of element hits 20% from top of viewport
- First value = which part of the TRIGGER element. Second value = which part of the VIEWPORT
- `markers: true` → shows colored lines so you can visually debug exactly where start/end are
- Always use `markers: true` while building, remove before production

**Practice task:**
Create `ScrollDebug.tsx`. Build various elements with different start/end values and `markers: true`. Spend the full hour just scrolling and watching exactly where each marker is. Understanding start/end deeply is what separates good from great GSAP developers.

---

### Day 31 — scrub

**What to learn:**
- `scrub: true` → the animation is LINKED to the scroll position. As you scroll down, animation plays. As you scroll up, animation reverses.
- `scrub: 1` → same but with 1 second of smoothing/lag, feels more luxurious
- `scrub: 3` → more lag, very smooth and cinematic
- This is how those amazing scroll-driven animations work on premium sites

**Practice task:**
Create `ParallaxSection.tsx`. A section with a background image. Use `scrub: 1` to move the background image at a slower speed than the scroll (classic parallax). This is used on virtually every Awwwards site.

---

### Day 32 — pin

**What to learn:**
- `pin: true` → pins (sticks) the trigger element to the screen while the rest of the page scrolls
- The element stays fixed until the ScrollTrigger's end point is reached
- This is how those "sticky storytelling" sections work — you scroll but the section stays in place and animates
- `pinSpacing: false` → removes the extra space that pin adds (sometimes you want this)

**Practice task:**
Create `PinnedSection.tsx`. A section that pins to the screen. While pinned, a text counter counts from 0 to 100 as you scroll. This is the foundation of every product showcase scroll animation.

---

### Day 33 — toggleClass & toggleActions

**What to learn:**
- `toggleClass: "active"` → adds the CSS class when element enters, removes when it leaves
- `toggleActions: "play pause resume reset"` → controls what happens on enter, leave, enter-back, leave-back
- Format: `"onEnter onLeave onEnterBack onLeaveBack"`
- Options: `"play"`, `"pause"`, `"resume"`, `"reset"`, `"restart"`, `"complete"`, `"reverse"`, `"none"`

**Practice task:**
Create `StickyNav.tsx`. Navbar that gets a CSS class `scrolled` added when you scroll past the hero section (using `toggleClass`). The CSS class changes the navbar background and size. This is the real navbar scroll pattern used everywhere.

---

### Day 34 — ScrollTrigger with Timeline

**What to learn:**
- You can attach ScrollTrigger to an entire timeline, not just individual tweens
- `const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top center", end: "bottom center", scrub: 1 } })`
- Every tween inside the timeline is controlled by the single ScrollTrigger
- This is the most powerful pattern for complex scroll sections

**Practice task:**
Create `ProductSection.tsx`. A section with a product image on one side, features list on the other. As you scroll through the section (pinned), each feature text highlights one by one in sync with a progress bar, all controlled by one scrubbed timeline.

---

### Day 35 — Horizontal Scroll

**What to learn:**
- Using ScrollTrigger to create horizontal scroll panels while the user scrolls vertically
- Pin a container, then use a scrubbed timeline to move the inner content horizontally
- `x: -(totalWidth - viewportWidth)` → calculate how far to move
- This is used on gallery pages, portfolio pages, and product showcases on Awwwards sites

**Practice task:**
Create `HorizontalGallery.tsx`. 5 panels side by side. User scrolls vertically but the panels slide horizontally. This is one of the most requested animation patterns by clients.

---

### Day 36 — ScrollTrigger.batch()

**What to learn:**
- `ScrollTrigger.batch()` is optimized for animating many elements as they scroll into view
- Instead of creating individual ScrollTriggers for every element (bad for performance), batch handles them all
- Takes a selector and a config object with `onEnter`, `onLeave` callbacks
- Much better performance than individual ScrollTriggers on long pages

**Practice task:**
Create `BlogPosts.tsx`. A page with 20 blog post cards. Use `ScrollTrigger.batch()` to animate them in groups as you scroll. Then use Chrome DevTools Performance tab to compare scroll performance with individual ScrollTriggers vs batch.

---

### Day 37 — ScrollTrigger.refresh() & resize

**What to learn:**
- When page layout changes (fonts load, images load, dynamic content added), ScrollTrigger positions become wrong
- `ScrollTrigger.refresh()` recalculates all trigger positions
- In Next.js, call it after images load, after fonts load, after dynamic content renders
- `ScrollTrigger.addEventListener("refresh", () => {})` for custom logic

**Practice task:**
Create a page where images load lazily. Notice how ScrollTrigger positions are wrong before images load. Then call `ScrollTrigger.refresh()` after all images are loaded and watch it fix itself.

---

### Day 38 — Day 39 — ScrollTrigger Project Part 1 & 2

**Build:** `ProductLandingPage.tsx`

A full product landing page with:
- Hero with scroll-triggered text reveal
- Features section with pinned panel, each feature animates in on scroll
- Stats counter section (numbers count up when scrolled into view)
- Horizontal scrolling image gallery
- Testimonials with batch scroll reveal
- Footer that slides up

---

### Day 40 — Day 41 — ScrollTrigger Project Part 3 & 4

Continue the product landing page. Add:
- Parallax background images in multiple sections
- A sticky navbar that changes style on scroll using `toggleClass`
- A floating progress bar at the top showing how far down the page the user has scrolled (using `scrub` + `scaleX`)
- Test on mobile and fix any issues

---

### Day 42 — Debugging & Performance

**What to learn:**
- Always `kill()` ScrollTriggers in cleanup: `ScrollTrigger.getAll().forEach(t => t.kill())`
- `will-change: transform` CSS on animated elements improves GPU performance
- Never animate `top`, `left`, `width`, `height` — these cause layout reflow. Use `x`, `y`, `scaleX`, `scaleY` instead
- `gsap.ticker.lagSmoothing(0)` prevents animation jumps when tab is not focused

**Practice task:**
Go back through your Phase 5 projects and audit them for performance. Apply `will-change` where appropriate. Check for layout-triggering properties. This is what separates amateur animations from production-ready ones.

---

## PHASE 6 — Advanced ScrollTrigger (Day 43–56)

> **Goal:** Build the kind of scroll experiences that win Awwwards. Product transformations, storytelling sections, scroll-synced video.

---

### Day 43–44 — The "Product Transformation" Pattern

This is exactly the ice cream example you described. An element is large at the top of the page. As you scroll, it moves, scales down, and repositions to a different part of the screen.

**What to learn:**
- Pin the section for a long scroll distance
- Use a scrubbed timeline to animate: `scale`, `x`, `y`, `borderRadius`, `opacity` all at once
- The key is controlling the exact scroll distance and mapping it to animation progress
- Using `gsap.utils.mapRange()` to map scroll progress to animation values

**Practice task:**
Create `IceCreamHero.tsx`. A large product image centered on screen. As you scroll: it scales down from `scale: 1.5` to `scale: 0.6`, moves to the top-right corner, the background color changes, and product details fade in around it. This is the exact pattern used on Apple product pages and premium food brand sites.

---

### Day 45–46 — Scroll-Synced Counter & Data Reveal

**What to learn:**
- Animating numbers counting up/down in sync with scroll
- `gsap.to(obj, { val: 1000, onUpdate: () => el.textContent = Math.round(obj.val) })`
- Revealing stat cards with staggered scroll-linked timing
- Progress bars that fill as you scroll into a section

**Practice task:**
Create `StatsSection.tsx`. 4 stat numbers (0 → 50K users, 0 → 4.9 stars, 0 → 200 countries, 0 → $2M revenue). They count up when scrolled into view. Below each number, a bar fills up to represent the percentage. Used on every SaaS landing page.

---

### Day 47–48 — Multi-Panel Storytelling

**What to learn:**
- Multiple pinned sections that tell a story step by step
- Each panel pins, animates its content, then unpins for the next panel
- Smooth transitions between panels
- Using `ScrollTrigger.create()` directly for more control

**Practice task:**
Create `StorytellingPage.tsx`. 4 story panels. Panel 1: "The Problem" (text fades in). Panel 2: "Our Solution" (product appears). Panel 3: "How it Works" (3-step process animates). Panel 4: "Results" (stats count up). Each panel is pinned while its content animates, then releases. This is the exact structure of Stripe, Linear, and Notion's landing pages.

---

### Day 49–50 — Scroll-Linked Path Drawing (SVG)

**What to learn:**
- Drawing SVG paths in sync with scroll using `gsap.to` + `strokeDashoffset`
- A line "draws itself" as you scroll down the page
- Connecting it to content sections so the line connects story beats

**Practice task:**
Create `RoadmapSection.tsx`. A vertical SVG line with dots at each milestone. As you scroll, the line draws itself and each dot pops in when the line reaches it. Used heavily on product roadmap and timeline pages.

---

### Day 51–52 — Scroll-Triggered Video Control

**What to learn:**
- Playing/pausing HTML5 video based on scroll position
- Scrubbing through video frames as user scrolls (like Apple's iPhone product page)
- This requires: drawing video frames to a canvas, then updating canvas on scroll
- `video.currentTime = progress * video.duration`

**Practice task:**
Create `VideoScrub.tsx`. A short video (you can use any mp4). As the user scrolls through a pinned section, the video plays frame by frame in sync with scroll speed. This is the most impressive animation on the entire internet and you now know how to build it.

---

### Day 53–54 — Smooth Scroll Integration

**What to learn:**
- GSAP ScrollSmoother plugin (Club GSAP, paid — or use Lenis as free alternative)
- **Lenis** is the most popular free smooth scroll library used with GSAP
- `npm i @studio-freight/lenis`
- Integrating Lenis with ScrollTrigger in Next.js App Router
- Lenis makes the entire page scroll feel like butter, like on every premium website

**Practice task:**
Create `SmoothScrollLayout.tsx`. A Next.js layout component that wraps the entire app with Lenis smooth scroll. Make sure ScrollTrigger works correctly with it by passing Lenis's scroll position to `ScrollTrigger.update()` on each tick.

---

### Day 55–56 — Phase 6 Project

**Build:** `AwardWorthyLanding.tsx`

A full landing page that features:
- Smooth scroll (Lenis)
- Hero: large centered product image that transforms on scroll
- Storytelling section: 3 pinned panels
- Stats section with scroll-linked counters
- Horizontal gallery
- SVG timeline that draws itself
- Every section has a deliberate, purposeful animation
- No animation exists "just because" — each one guides the user's attention

---

## PHASE 7 — Text Animations (Day 57–63)

> **Goal:** Animate text like you see on Awwwards sites — letters flying in, words revealing, lines splitting

---

### Day 57 — SplitText Plugin

**What to learn:**
- SplitText is a GSAP plugin (free for personal use, Club for commercial)
- It splits a text element into individual `chars`, `words`, and `lines` that you can animate independently
- `new SplitText(ref.current, { type: "chars,words,lines" })`
- After splitting, you get arrays: `split.chars`, `split.words`, `split.lines`
- Always revert split on cleanup: `split.revert()`

**Practice task:**
Create `TextSplit.tsx`. A heading that splits into characters. Animate each character flying in from below with a stagger. Then try the same with words. Then lines. These three variants cover 95% of all text animation patterns on premium sites.

---

### Day 58 — Text Reveal (Mask Pattern)

**What to learn:**
- The most elegant text animation: text that "reveals" from behind a mask
- Each line of text is hidden behind a parent `overflow: hidden` div
- Text animates up from `y: 100%` → `y: 0` (appears to slide up from behind a wall)
- This is the #1 most used text animation on Awwwards sites. It's everywhere.

**Practice task:**
Create `MaskedTextReveal.tsx`. A heading with 3 lines. Each line is masked. On scroll trigger, each line slides up with a 0.1s stagger. Spend the whole practice session making the timing feel absolutely perfect.

---

### Day 59 — Scramble Text Effect

**What to learn:**
- GSAP's ScrambleText plugin randomly cycles through characters before landing on the real text
- Great for cyberpunk / tech brand aesthetics
- `gsap.to(ref.current, { scrambleText: "Hello World", duration: 1 })`
- Can customize the character set used for scrambling

**Practice task:**
Create `ScrambleHero.tsx`. A hero heading that scrambles in when the page loads, cycling through random characters before resolving to the real text. Used on tech startup and developer tool websites.

---

### Day 60 — Counting & Morphing Numbers

**What to learn:**
- Animate a number from 0 to any value with custom formatting
- Format output with commas, dollar signs, percentages
- `gsap.to(obj, { value: 9999, onUpdate: () => el.textContent = formatNumber(obj.value) })`
- Number morph: transitioning between two different numbers with a scramble effect

**Practice task:**
Create `LiveCounter.tsx`. A dashboard-style component where 4 stats count up on scroll: `$0 → $2,847,392`, `0% → 99.9%`, `0 → 50,000 users`, `0 → 4.97 stars`. Format each number correctly. This is used on SaaS dashboards and marketing sites.

---

### Day 61 — Text Path Animation

**What to learn:**
- Animating text along an SVG path
- Curved text that follows a wave or circle
- `textPath` SVG element + GSAP controlling `startOffset`
- Great for unique heading treatments and brand moments

**Practice task:**
Create `CurvedText.tsx`. The words "Scroll Down" curve along a circular SVG path and slowly rotate. This is a designer-favorite decorative element seen on portfolio and fashion websites.

---

### Day 62 — Typewriter Effect

**What to learn:**
- Classic typewriter: reveal text one character at a time
- But the GSAP way: using stagger on SplitText chars with `from: "start"` for a more premium feel
- Also: multi-word typewriter where words cycle through
- Add a blinking cursor using CSS animation alongside GSAP

**Practice task:**
Create `TypewriterHero.tsx`. A hero section with a typewriter heading that types out 3 different phrases in a loop: "We build products", "We ship fast", "We make you money". Each phrase types in and then deletes.

---

### Day 63 — Phase 7 Project

**Build:** `AnimatedTypography.tsx`

A showcase page demonstrating 5 premium text animations:
1. Masked line reveal (most important)
2. Character stagger fly-in
3. Scramble effect
4. Number counter
5. Typewriter with cycling words

Polish each one until the timing feels absolutely perfect. Typography animation is what makes a site feel premium. Show this to any frontend hiring manager and you will get interviews.

---

## PHASE 8 — SVG & Path Animations (Day 64–70)

> **Goal:** Animate SVGs, icons, and illustrations — logos, loaders, morphing shapes

---

### Day 64 — SVG Basics with GSAP

**What to learn:**
- GSAP can animate any SVG attribute: `cx`, `cy`, `r`, `d`, `fill`, `stroke`
- `strokeDasharray` and `strokeDashoffset` are the keys to drawing paths
- Set `strokeDasharray` equal to path length, set `strokeDashoffset` to same value (makes path invisible), then animate `strokeDashoffset` to 0 (draws the path)
- `path.getTotalLength()` gives you the path length

**Practice task:**
Create `DrawingIcon.tsx`. A simple SVG checkmark or arrow. Make it draw itself when it appears. This pattern is used for loading states, success states, and decorative illustrations everywhere.

---

### Day 65 — Logo Animation

**What to learn:**
- Animating a multi-part SVG logo
- Each letter or shape of the logo animates in separately
- Combining draw-on effect with scale and opacity
- The GSAP `DrawSVGPlugin` (free) helps with this

**Practice task:**
Create `LogoReveal.tsx`. Take any simple SVG logo (or create one with basic shapes). Animate each part of the logo in sequence — it draws itself, then fills with color. This is used in every website intro animation.

---

### Day 66 — MorphSVG (Shape Morphing)

**What to learn:**
- MorphSVG plugin transforms one SVG shape into a completely different shape
- A circle morphs into a star, a square into a cloud, a play button into a pause button
- `gsap.to(shape, { morphSVG: targetShape })`
- Shapes must have the same number of points for best results, but GSAP handles mismatches

**Practice task:**
Create `PlayPauseButton.tsx`. A play button (triangle) that morphs into a pause button (two rectangles) on click, and morphs back on click again. This is a microinteraction used in every music and video player.

---

### Day 67–68 — Animated Illustrations

**What to learn:**
- Breaking an SVG illustration into layers and animating each part
- Continuous "breathing" or "floating" animations using `yoyo: true, repeat: -1`
- Making characters wave, blink, or express emotion
- Coordinating illustration animation with scroll

**Practice task:**
Create `AnimatedHeroIllustration.tsx`. Find a free SVG illustration (undraw.co has great ones). Animate different parts: a character waves their hand, clouds float slowly, a sun pulses. Make it loop forever and feel alive. This is the kind of thing that makes startup landing pages feel friendly and memorable.

---

### Day 69 — SVG Filters & Effects

**What to learn:**
- Animating SVG `feDisplacementMap` filter to create a liquid/glow distortion effect
- Using GSAP to animate filter values in real-time
- Creating an ink splash or fluid animation effect
- Combining with CSS `backdrop-filter` for glass effects

**Practice task:**
Create `GlitchEffect.tsx`. Text that glitches using animated SVG displacement filters. This is the signature effect on cyberpunk and creative agency websites.

---

### Day 70 — Phase 8 Project

**Build:** `AnimatedLoader.tsx`

A complete page loader that:
- SVG logo draws itself (strokeDashoffset animation)
- Progress bar fills up
- Number counts from 0 to 100
- When done: overlay morphs and slides away to reveal the page
- The reveal triggers the hero section's entrance animation

This is the loading experience used on every award-winning website.

---

## PHASE 9 — 3D & WebGL with Three.js (Day 71–90)

> **Goal:** Build websites with 3D scenes, floating objects, particle effects — the stuff that wins Awwwards

---

### Day 71–72 — Three.js Fundamentals

**What to learn:**
- Three.js is a JavaScript library for 3D graphics in the browser using WebGL
- `npm i three @types/three`
- Core concepts: **Scene**, **Camera**, **Renderer**, **Mesh**, **Geometry**, **Material**
- The render loop: `requestAnimationFrame` calls the render function 60 times per second
- Setting up Three.js in a Next.js `"use client"` component

**Practice task:**
Create `ThreeCanvas.tsx`. A rotating 3D cube on a dark background. Just getting this working is the win for day 71-72. The setup is the hardest part.

---

### Day 73–74 — GSAP + Three.js

**What to learn:**
- GSAP can animate ANY JavaScript object, including Three.js objects
- `gsap.to(mesh.position, { x: 2, duration: 1 })` moves a 3D mesh
- `gsap.to(mesh.rotation, { y: Math.PI, duration: 1 })` rotates it
- `gsap.to(mesh.scale, { x: 2, y: 2, z: 2, duration: 0.5 })` scales it
- Combining GSAP timelines with Three.js for choreographed 3D animations

**Practice task:**
Create `AnimatedSphere.tsx`. A 3D sphere that reacts to mouse position — it rotates and slightly moves based on where the cursor is. Use `gsap.quickTo()` for smooth mouse following. This "magnetic 3D object" is the signature element of portfolio websites.

---

### Day 75–76 — React Three Fiber

**What to learn:**
- React Three Fiber (`@react-three/fiber`) is the React wrapper for Three.js
- `npm i @react-three/fiber @react-three/drei`
- Instead of imperative Three.js code, you write JSX: `<mesh><boxGeometry /><meshStandardMaterial /></mesh>`
- Drei is a helper library with pre-built 3D components
- Using `useGSAP` with React Three Fiber for animations

**Practice task:**
Rebuild your `AnimatedSphere.tsx` using React Three Fiber. Compare how much cleaner the code is. From now on, use R3F for all 3D work.

---

### Day 77–78 — 3D Text & Floating Objects

**What to learn:**
- 3D text using `TextGeometry` or Drei's `<Text3D>` component
- Floating animation: gentle up-down movement with `repeat: -1, yoyo: true`
- Multiple floating objects at different speeds and phases
- Depth of field effect using Drei's `<DepthOfField>` post-processing

**Practice task:**
Create `FloatingObjects.tsx`. 6 different 3D shapes floating at different speeds and directions on a gradient background. This is the hero background effect used on crypto, AI, and tech startup sites in 2024.

---

### Day 79–80 — Particle Systems

**What to learn:**
- `THREE.Points` with `THREE.BufferGeometry` for thousands of particles
- GSAP animating particle positions, sizes, and opacity
- Mouse-reactive particles that scatter on hover
- Connecting particles with lines to create a network effect

**Practice task:**
Create `ParticleField.tsx`. 2000 particles in a sphere formation. On mouse move, particles near the cursor push away. This is the most popular WebGL background effect on developer portfolio sites.

---

### Day 81–82 — 3D Models (GLTF)

**What to learn:**
- Loading `.glb` / `.gltf` 3D model files with Drei's `useGLTF` hook
- Animating specific parts of a model with GSAP
- Getting free 3D models from Sketchfab, Poly Pizza, and Google Scans
- Optimizing models for web with `gltf-transform` or Blender

**Practice task:**
Download a free 3D food or product model from Poly Pizza. Create `ProductModel3D.tsx`. Display the model with good lighting, make it slowly rotate on load, then react to scroll — scale up as you scroll to it (the ice cream pattern you described).

---

### Day 83–84 — Scroll-Linked 3D Animation

**What to learn:**
- Combining ScrollTrigger with Three.js / React Three Fiber
- The scroll position controls the 3D camera or object properties
- Object flies toward camera, rotates 360°, and settles in position — all on scroll
- This is the Apple iPhone page, the Lusion effect, every premium product site

**Practice task:**
Create `ScrollProduct3D.tsx`. A 3D product (your model from day 81-82). On scroll: it starts far away and small, flies toward the camera growing larger, rotates to show different angles, and settles in final position. This is the "icecream that changes position and scale on scroll" you described.

---

### Day 85–86 — Shader Materials & Custom Effects

**What to learn:**
- GLSL shaders control how every pixel of a 3D object is colored
- `THREE.ShaderMaterial` with vertex and fragment shaders
- Animating shader uniforms with GSAP: `gsap.to(material.uniforms.uTime, { value: 1 })`
- A simple wave distortion shader
- Noise-based animations (Perlin noise)

**Practice task:**
Create `WaveBackground.tsx`. A flat 3D plane with a GLSL shader that makes it wave like an ocean. Animate the wave speed with GSAP based on mouse velocity. This is the background effect on many creative agency hero sections.

---

### Day 87–88 — Post-Processing Effects

**What to learn:**
- Post-processing in React Three Fiber using `@react-three/postprocessing`
- `<Bloom>` → makes bright areas glow (very popular, used everywhere)
- `<ChromaticAberration>` → color fringing effect for cyberpunk aesthetic
- `<Noise>` → film grain texture
- `<Vignette>` → darkened edges for depth
- Animating post-processing effect intensity with GSAP

**Practice task:**
Add post-processing to your floating objects scene from Day 77-78. Add Bloom so the objects glow. Add a subtle ChromaticAberration that increases on mouse movement. The difference in visual quality will be dramatic.

---

### Day 89–90 — Phase 9 Project

**Build:** `3DHeroSection.tsx`

A complete 3D hero section for a product:
- 3D product model (or abstract 3D object) in the center
- Smooth rotation reacting to mouse position
- Scroll down: product scales up, rotates, and transforms into the next section
- Particle background that reacts to mouse
- Bloom post-processing
- All GSAP animated, scroll-linked with ScrollTrigger
- Smooth scroll with Lenis

This is Awwwards-level work.

---

## PHASE 10 — Storytelling & Awwwards Websites (Day 91–120)

> **Goal:** Put everything together. Build the kind of websites that win awards, go viral, and get you hired anywhere.

---

### Day 91–95 — Full Storytelling Website

**Build:** A brand storytelling website for an imaginary product (perfume, sneaker, food brand — your choice).

Structure:
- Animated loader (Day 70 pattern)
- Hero: full-screen 3D product + text reveal
- "Story" section: pinned panels that narrate brand history
- Product feature sections: scroll-linked product transformations
- Ingredients / materials section: particles morph into the product
- Social proof: number counters, testimonials with scroll reveal
- CTA: text scramble + magnetic button
- Footer: masked text reveal

Every animation must have purpose. Nothing moves without reason.

---

### Day 96–100 — Awwwards Clone Study

**What to do:**
Pick 2 Awwwards-winning websites and rebuild their signature animations. Go to awwwards.com, filter by "Site of the Day". Pick sites that use scroll animations and 3D.

Analyze each animation:
1. What triggers it? (scroll, click, hover, load)
2. What properties are changing? (position, scale, opacity, color)
3. What is the timing? (duration, ease, stagger)
4. What is the purpose? (guide attention, tell story, delight)

Then rebuild it. You don't need to clone the whole site. Just the signature animation.

---

### Day 101–105 — Magnetic & Physics Interactions

**What to learn:**
- Magnetic buttons: button moves toward mouse cursor when cursor is nearby
- `gsap.quickTo()` for ultra-smooth mouse following (better than `gsap.to()` for mouse tracking)
- Physics-based following using `inertia` plugin
- Cursor that morphs shape on hover over different elements

**Practice task:**
Create `MagneticButton.tsx`. When mouse is within 80px of the button, the button gently moves toward the cursor. When mouse leaves the area, it snaps back with an elastic ease. This is the most popular microinteraction on creative agency websites.

---

### Day 106–110 — Page Transition System

**Build:** A complete Next.js page transition system.

**What to learn:**
- Creating a `TransitionLayout.tsx` wrapper component
- Intercept navigation: animate current page out, then navigate, then animate new page in
- Different transition styles: page wipe, overlay cover, fade, curtain reveal
- Using `usePathname` from Next.js to detect route changes

**Practice task:**
Build a 3-page Next.js site with a different transition between each page. This is what gets you hired at agencies. It's proof you understand both React architecture and animation at a professional level.

---

### Day 111–115 — Performance & Optimization

**What to learn:**
- `will-change: transform` on animated elements
- Never animate `width`, `height`, `top`, `left` — always use `transform` equivalents
- `gsap.ticker.lagSmoothing(0)` for consistent animation
- Killing ScrollTriggers properly to avoid memory leaks
- `React.memo` on animated components to prevent re-render during animation
- Loading GSAP plugins only in the browser (Next.js SSR issue fix)
- `IntersectionObserver` as a fallback for very simple scroll reveals (when GSAP is overkill)

**Practice task:**
Go through your Day 91-95 storytelling website and performance audit every animation. Use Chrome DevTools Performance panel. Target 60fps throughout the entire scroll. Fix any janky animations. This is what separates a portfolio piece from a shipped product.

---

### Day 116–120 — Your Portfolio Website

**Build:** Your own developer portfolio with GSAP animations.

Every page should demonstrate a different skill:

**Home page:**
- Animated loader with your name drawing via SVG
- Hero with 3D element or particle background
- Masked text reveal for your headline

**Work/Projects page:**
- Horizontal scroll gallery
- Project cards with hover animations
- Smooth page transitions to project detail

**About page:**
- Scroll-linked timeline of your experience
- Number counters for your stats
- Photo with parallax layers

**Contact page:**
- Magnetic form fields
- Animated submit button
- Success state morphing animation

This portfolio will get you interviews at any agency, startup, or tech company that values frontend craft.

---

## ⏱️ Daily 1 Hour Schedule

| Time | Activity |
|------|----------|
| 0:00 – 0:10 | Read and understand the concept for today |
| 0:10 – 0:45 | Build the practice component in `.tsx` |
| 0:45 – 0:55 | Break it. Change values. Try different eases. Experiment. |
| 0:55 – 1:00 | Write one sentence in a notes file about what you learned |

> The 10 minutes of experimentation at the end is more valuable than the 35 minutes of building. This is where real understanding forms.

---

## 📚 Resources

| Resource | What For |
|----------|---------|
| gsap.com/docs | Official docs — your daily reference |
| gsap.com/ease-visualizer | Understand easing visually |
| gsap.com/showcase | Inspiration and reverse-engineering |
| gsap.com/community | Ask questions, see solutions |
| gsap.com/resources/React | Official GSAP + React guide |
| threejs.org/docs | Three.js reference |
| drei.pmnd.rs | React Three Fiber helpers |
| awwwards.com | Study winning sites |
| lottiefiles.com | Pre-made animations to integrate |
| undraw.co | Free SVG illustrations to animate |
| polypizza.co | Free 3D models for practice |
| sketchfab.com | More 3D models |
| lenis.darkroom.engineering | Smooth scroll library |

---

## 🗺️ Quick Reference — What to Use When

| You want to... | Use this |
|----------------|----------|
| Move/fade/scale one element | `gsap.to()` or `gsap.from()` |
| Sequence multiple animations | `gsap.timeline()` |
| Animate on scroll | `ScrollTrigger` |
| Link animation to scroll position | `scrub: true` |
| Pin a section during scroll | `pin: true` |
| Animate text letter by letter | `SplitText` plugin |
| Draw an SVG path | `strokeDashoffset` animation |
| Morph one shape into another | `MorphSVG` plugin |
| Smooth scroll feel | `Lenis` |
| 3D objects in React | `React Three Fiber` + `Drei` |
| Mouse-following animations | `gsap.quickTo()` |
| Animate many items on scroll | `ScrollTrigger.batch()` |
| Control animation with a variable | Store tween in `useRef` |
| Animate in React properly | `useGSAP()` from `@gsap/react` |

---

> **Final thought:** The difference between a developer who knows GSAP and a developer who has command of GSAP is this — the expert thinks about animation PURPOSE first, code second. Every animation should earn its place by guiding attention, communicating something, or making the user feel something. Build with that mindset from Day 1 and by Day 120 you will build things that other developers cannot explain how you made.