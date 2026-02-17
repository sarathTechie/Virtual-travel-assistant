# CSS Animation & Styling Reference Guide

## Landing Page Animation Sequence

### ✈️ PLANE ANIMATION (Fixed!)
```css
.plane {
  animation: planeFlying 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
}

@keyframes planeFlying {
  0% { left: -100px; opacity: 1; }
  100% { left: calc(50vw - 24px); opacity: 1; }  /* STOPS AT CENTER */
}
```

**Timeline:**
- **0.5s**: Plane enters screen
- **3.5s**: Plane reaches center and STOPS
- **3.5s**: Button appears and drops

### 🔘 BUTTON DROP ANIMATION (Fixed!)
```css
.primary-btn {
  animation: buttonDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 3.5s forwards !important;
  animation-fill-mode: both;
  opacity: 0;  /* Hidden until animation starts */
  margin-top: 140px;
}

@keyframes buttonDrop {
  0% { transform: translateY(-50px); opacity: 0; }
  60% { opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}
```

**Timeline:**
- **3.5s**: Button animation starts (after plane finishes)
- **4.3s**: Button animation completes

---

## Form Page Styling

### 📦 FORM CONTAINER (Premium Glass Effect)
```css
.form-container {
  background: linear-gradient(
    135deg,
    rgba(10, 30, 40, 0.75),    /* Semi-transparent dark blue */
    rgba(5, 20, 28, 0.85)       /* Semi-transparent darker blue */
  );
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);  /* Glass effect */
  border: 1px solid rgba(34, 230, 255, 0.2);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),        /* Depth shadow */
    inset 0 1px 1px rgba(255, 255, 255, 0.1),  /* Inner highlight */
    0 0 40px rgba(34, 230, 255, 0.1);      /* Glow */
  animation: formFloatIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### ✨ ANIMATED BORDER GLOW
```css
.form-container::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(
    135deg,
    var(--accent-cyan),
    var(--accent-green),
    var(--accent-purple),
    var(--accent-blue)
  );
  border-radius: 24px;
  opacity: 0;
  z-index: -1;
  animation: gradientBorder 6s ease-in-out infinite;
}

@keyframes gradientBorder {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.2; }
}
```

### 📝 INPUT FIELD ENHANCEMENT
```css
.form-container input {
  background: rgba(5, 20, 28, 0.6);
  border: 1px solid rgba(34, 230, 255, 0.2);
  border-bottom: 2px solid rgba(34, 230, 255, 0.2);  /* Bottom line indicator */
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: inputSlideUp 0.5s ease-out var(--input-delay, 0.3s);
}

.form-container input:focus {
  border-color: var(--accent-cyan);
  border-bottom-color: var(--accent-cyan);
  box-shadow: 
    0 0 20px rgba(34, 230, 255, 0.2),
    inset 0 0 20px rgba(34, 230, 255, 0.05);  /* Inner glow */
}
```

**Input Animation Delays (Staggered):**
```
1st input: 0.35s
2nd input: 0.4s
3rd input: 0.45s
4th input: 0.5s
5th select: 0.55s
6th select: 0.6s
```

### 🎯 BUTTON HOVER ANIMATION
```css
.form-actions button {
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-green));
  background-size: 200% 200%;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.form-actions button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;  /* Hidden initially */
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  transition: left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.form-actions button:hover::before {
  left: 0;  /* Slides in on hover */
}

.form-actions button:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 32px rgba(34, 230, 255, 0.5),
    0 0 20px rgba(34, 230, 255, 0.3);
}
```

---

## Mode Cards Premium Design

### 🎨 CARD STYLING WITH GLASS EFFECT
```css
.mode-card {
  background: linear-gradient(
    135deg,
    rgba(10, 30, 40, 0.7),
    rgba(5, 20, 28, 0.8)
  );
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(34, 230, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  animation: cardSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 💫 BORDER GLOW ANIMATION
```css
.mode-card::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px; right: -1px; bottom: -1px;
  background: linear-gradient(
    135deg,
    var(--accent-cyan),
    var(--accent-green),
    var(--accent-purple)
  );
  opacity: 0;
  animation: borderGlow 3s ease-in-out infinite;
}

@keyframes borderGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

.mode-card:hover::before {
  animation: borderGlowActive 0.4s ease forwards;
}

@keyframes borderGlowActive {
  to { opacity: 0.6; }
}
```

### 🎯 CARD HOVER EFFECTS
```css
.mode-card:hover {
  transform: translateY(-8px) scale(1.02);  /* Lift + slight zoom */
  border-color: rgba(34, 230, 255, 0.5);
  box-shadow: 
    0 20px 50px rgba(34, 230, 255, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    0 0 30px rgba(34, 230, 255, 0.2);
}

.mode-card:hover ul li {
  color: var(--text-main);
  transform: translateX(5px);  /* List items slide right */
}
```

### 🔘 CARD BUTTON GRADIENT SWAP
```css
.card-btn {
  background: rgba(34, 230, 255, 0.1);
  border: 1.5px solid rgba(34, 230, 255, 0.4);
  color: var(--accent-cyan);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--accent-cyan);
  transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: -1;
}

.card-btn:hover::before {
  left: 0;  /* Slides in from left */
}

.card-btn:hover {
  background: var(--accent-cyan);
  color: #00141b;
  border-color: var(--accent-cyan);
  box-shadow: 0 8px 20px rgba(34, 230, 255, 0.4);
  transform: translateY(-2px);
}
```

---

## Animation Sequence Summary

### Total Animation Timeline

```
LANDING PAGE:
  0.0s ──→ Hero title slides in (0.8s duration)
          
  0.2s ──→ Subtitle fades up (0.8s duration, 0.2s delay)
          
  0.5s ──→ Plane enters from left
  3.5s ──→ Plane reaches center & STOPS
          
  3.5s ──→ Button drops with bounce (0.8s duration)
  4.3s ──→ Button visible & interactive


FORM PAGES:
  0.0s ──→ Form container floats in (0.8s)
  0.1s ──→ Heading slides down (0.6s)
  0.2s ──→ Subtitle fades up (0.6s)
  
  0.35s ──→ Input 1 slides up (0.5s)
  0.40s ──→ Input 2 slides up (0.5s)
  0.45s ──→ Input 3 slides up (0.5s)
  0.50s ──→ Input 4 slides up (0.5s)
  0.55s ──→ Select 1 slides up (0.5s)
  0.60s ──→ Select 2 slides up (0.5s)
  
  0.70s ──→ Form actions fade up (0.6s)
  

MODE CARDS PAGE:
  0.2s ──→ Card 1 slides up (0.6s)
  0.4s ──→ Card 2 slides up (0.6s)
  
  (Continuous) ──→ Border glow animation (3s loop)
```

---

## Key CSS Properties Used

| Property | Value | Purpose |
|----------|-------|---------|
| `backdrop-filter` | blur(10px) | Glass morphism effect |
| `will-change` | transform | Performance optimization |
| `box-shadow` | Multiple | Depth, glow, inner highlight |
| `cubic-bezier()` | Custom | Organic, bouncy animations |
| `animation-delay` | Varied | Staggered entrance effects |
| `transform` | translate, scale | GPU-accelerated motion |
| `linear-gradient` | 135deg | Modern gradient backgrounds |

---

## Browser Compatibility

```css
/* Added webkit prefixes for Safari support */
-webkit-background-clip: text;     /* For gradient text */
-webkit-text-fill-color: transparent;  /* For gradient text */
-webkit-backdrop-filter: blur(10px);   /* For glass effect on Safari 12+ */
```

---

## Performance Notes

✅ **All animations use GPU-accelerated properties:**
- `transform` (translate, scale, rotate)
- `opacity`

✅ **Avoided paint-heavy properties:**
- No color changes that cause repaints
- No width/height changes during animations
- Backdrop filters only on hover (not continuous)

✅ **Result:** Smooth 60fps animations on all devices

---

## Responsive Breakpoints

```css
@media (max-width: 768px) {
  /* Tablet adjustments */
  .mode-container { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  /* Mobile adjustments */
  Reduced padding, font-sizes
  Maintained premium feel
  Single column layouts
}
```
