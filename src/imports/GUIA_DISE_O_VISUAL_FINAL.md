# 🎨 GUÍA DE DISEÑO VISUAL FINAL - MSI STOCK
## Basada en tu Moodboard

**Fecha:** 27 de Mayo 2026  
**Estado:** Listo para implementar en Figma  
**Referencia:** Moodboard minimalista + corporativo

---

## 🎨 PALETA DE COLORES FINAL

### COLORS.JSON (Para copiar a Figma)

```json
{
  "colors": {
    "black_primary": "#1a1a1a",
    "orange_accent": "#ff6b35",
    "yellow_warning": "#ffc107",
    "green_success": "#28a745",
    "red_error": "#dc3545",
    "blue_info": "#17a2b8",
    
    "white": "#ffffff",
    "gray_light": "#f5f5f5",
    "gray_medium": "#999999",
    "gray_dark": "#444444",
    "border": "#e0e0e0"
  }
}
```

### APLICACIÓN DE COLORES

| Elemento | Color | Hex | Notas |
|----------|-------|-----|-------|
| **Backgrounds** | White | #fff | Principal |
| **Backgrounds Alt** | Gray Light | #f5f5f5 | Secciones secundarias |
| **Text Principal** | Black | #1a1a1a | Títulos, body |
| **Text Secundario** | Gray Medium | #999 | Labels, hints |
| **Borders** | Gray Border | #e0e0e0 | Separadores |
| **Button Primario** | Orange | #ff6b35 | CTAs, acciones |
| **Button Secundario** | Gray Light | #f5f5f5 | Cancelar, alternativas |
| **Alert/Crítico** | Orange | #ff6b35 | Atención |
| **Warning** | Yellow | #ffc107 | Advertencia |
| **Success** | Green | #28a745 | Éxito |
| **Error** | Red | #dc3545 | Errores |
| **Info** | Blue | #17a2b8 | Información |

---

## 🔤 TIPOGRAFÍA FINAL

### FONT FAMILY
**Primary:** Inter, Helvetica Neue, -apple-system  
**Fallback:** System fonts

### SCALE & WEIGHTS

```
H1:  36px | Weight: 700 Bold    | Color: #1a1a1a | Line-height: 1.2
H2:  24px | Weight: 700 Bold    | Color: #1a1a1a | Line-height: 1.3
H3:  18px | Weight: 600 Semi    | Color: #1a1a1a | Line-height: 1.3
Body 16px | Weight: 400 Regular | Color: #1a1a1a | Line-height: 1.6
Small 12px| Weight: 400 Regular | Color: #999    | Line-height: 1.5
KPI  32px | Weight: 700 Bold    | Color: #1a1a1a | Line-height: 1.2
Label 12px| Weight: 500 Medium  | Color: #444    | Line-height: 1.4
```

---

## 🧩 COMPONENTES CORE

### 1. BUTTON

**Primario (Call-to-Action)**
```
Background: #ff6b35
Text: White, 14px Semi-bold
Padding: 12px 24px
Border-radius: 8px
Hover: Background #f55a24 (darker)
Active: Background #e94a14 (even darker)
Disabled: Background #ccc, Text #999, opacity 0.5
Shadow: None (clean)
```

**Secundario**
```
Background: #f5f5f5
Text: #1a1a1a, 14px Semi-bold
Border: 1px solid #e0e0e0
Padding: 12px 24px
Border-radius: 8px
Hover: Background #efefef
Active: Background #e0e0e0
```

**Sizes:**
- Small: 8px 16px
- Normal: 12px 24px (default)
- Large: 14px 32px
- Full-width: width 100%

---

### 2. CARD

**Default**
```
Background: White
Border: 1px solid #e0e0e0
Border-radius: 8px
Padding: 20px
Shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover: Shadow 0 4px 12px rgba(0,0,0,0.12)
```

**Variants:**
- **Elevated:** More prominent shadow (use for CTAs)
- **Outlined:** No shadow, stronger border
- **Flat:** No shadow, no border, gray background

---

### 3. KPI CARD

**Structure:**
```
┌─────────────────────┐
│ 📦 Stock Total      │ (Icon + Label, 12px gray)
│                     │
│    2,450            │ (32px Bold black)
│    materiales       │ (12px gray)
│                     │
│ ↑ +120 esta semana  │ (12px accent color)
└─────────────────────┘
```

**Colors:**
- Title: #999 (gray medium)
- Number: #1a1a1a (black)
- Subtitle: #999 (gray medium)
- Trend: #28a745 (green) o #dc3545 (red)

---

### 4. BADGE / TAG

**Base:**
```
Padding: 4px 8px
Font-size: 12px
Border-radius: 4px
Border: none
```

**Variants:**

| Status | Background | Text |
|--------|-----------|------|
| Default | #f5f5f5 | #1a1a1a |
| Primary | #1a1a1a | #fff |
| Success | #28a745 | #fff |
| Warning | #ffc107 | #1a1a1a |
| Error | #dc3545 | #fff |
| Info | #17a2b8 | #fff |

---

### 5. INPUT FIELD

**Default State:**
```
Background: White
Border: 1px solid #e0e0e0
Border-radius: 6px
Padding: 10px 12px
Font-size: 14px
Line-height: 1.5
```

**States:**
```
Hover:    Border #999, shadow 0 0 0 3px rgba(255,107,53,0.1)
Focus:    Border #ff6b35, shadow 0 0 0 3px rgba(255,107,53,0.2)
Disabled: Background #f5f5f5, border #e0e0e0, text #999
Error:    Border #dc3545, background #ffe0e0
```

---

### 6. TABLE

**Header:**
```
Background: #f5f5f5
Border-bottom: 1px #e0e0e0
Text: 12px Semi-bold, #1a1a1a
Padding: 12px 16px
```

**Body Rows:**
```
Background: White
Border-bottom: 1px #e0e0e0
Text: 14px Regular, #1a1a1a
Padding: 14px 16px
```

**Hover:**
```
Background: #f9f9f9
Cursor: pointer
```

**Striped (Optional):**
```
Row even: #fafafa
Row odd: #fff
```

---

### 7. MODAL / DIALOG

**Backdrop:**
```
Background: rgba(0,0,0,0.5)
Animate: Fade-in 150ms
```

**Modal Box:**
```
Background: White
Border-radius: 12px
Padding: 32px
Max-width: 500px
Shadow: 0 20px 60px rgba(0,0,0,0.3)
Animate: Scale-in + fade 200ms
```

**Title:**
```
Font-size: 24px
Weight: Bold
Color: #1a1a1a
Margin-bottom: 16px
```

**Buttons:**
```
Primary: Orange #ff6b35
Secondary: Gray #f5f5f5
Spacing: 12px between
```

---

### 8. TOAST NOTIFICATION

**Container:**
```
Position: Fixed bottom-right
Background: Varies by type
Padding: 16px 20px
Border-radius: 8px
Shadow: 0 4px 12px rgba(0,0,0,0.15)
Min-width: 300px
Max-width: 500px
Animate: Slide-in 300ms
```

**Variants:**

**Success:**
```
Background: #28a745
Text: White
Icon: Checkmark
Auto-dismiss: 4 seconds
```

**Warning:**
```
Background: #ffc107
Text: #1a1a1a
Icon: Alert
Auto-dismiss: 5 seconds
```

**Error:**
```
Background: #dc3545
Text: White
Icon: X
Action: Retry button
Auto-dismiss: None (manual)
```

---

### 9. DROPDOWN / SELECT

**Closed:**
```
Background: White
Border: 1px #e0e0e0
Padding: 10px 12px
Border-radius: 6px
Display: Flex (arrow right-aligned)
```

**Open:**
```
Border: 1px #ff6b35
Shadow: 0 4px 12px rgba(0,0,0,0.1)
Z-index: 100+
```

**Options:**
```
Padding: 10px 16px
Hover: Background #f5f5f5
Selected: Background #f5f5f5, text bold
Border-bottom: 1px #e0e0e0
```

---

### 10. PAGINATION

```
Numbers: 14px regular, padding 8px 12px, border-radius 4px
Active: Background #ff6b35, text white
Hover: Background #f5f5f5
Disabled: Opacity 0.5
Spacing: 4px between
```

---

## 📐 SPACING SYSTEM (8px Base)

```
8px   = xs (gaps, small margins)
16px  = sm (standard padding)
24px  = md (section spacing)
32px  = lg (large gaps)
48px  = xl (very large)
64px  = 2xl (page sections)
```

**Aplicación:**
- Card padding: 20px (16 + 4)
- Button padding: 12px 24px (sm + md)
- Section gap: 24-32px
- Page padding: 24-32px

---

## 🎬 ANIMACIONES & TRANSITIONS

**Duración base:** 150-200ms (rápido)  
**Easing:** ease-in-out (suave)

```
Hover transitions:
  - Color change: 150ms
  - Scale: 200ms
  - Opacity: 150ms

Page transitions:
  - Fade-in: 200ms
  - Slide-in: 250ms

Loading:
  - Spinner: 1s infinite
  - Skeleton: 1.5s pulse
```

---

## 📱 RESPONSIVE BREAKPOINTS

### Mobile (< 640px)
```
Sidebar: Collapsed (hamburger)
Cards: Stack vertical (1 column)
Table: Scroll horizontal
Buttons: Full-width
Font-size: +1px (readability)
Padding: Reduced 16px
```

### Tablet (640px - 1024px)
```
Sidebar: Collapsible
Cards: 2 columns max
Table: Scroll if needed
Buttons: Normal width
Font-size: Normal
Padding: Normal 20px
```

### Desktop (> 1024px)
```
Sidebar: Expanded (280px)
Cards: 2-4 columns
Table: Full
Buttons: Auto width
Font-size: Normal
Padding: 32px
```

---

## 🎯 COMPONENTES A CREAR EN FIGMA

### Main Components:
- [ ] Button (4 sizes × 3 variants = 12)
- [ ] Card (3 variants)
- [ ] KPI Card (with icons)
- [ ] Badge (6 variants)
- [ ] Input Field (4 states)
- [ ] Select/Dropdown
- [ ] Table (header + cell)
- [ ] Modal
- [ ] Toast (4 types)
- [ ] Checkbox
- [ ] Radio Button
- [ ] Toggle Switch
- [ ] Icon Set (24px × 2 weights)
- [ ] Avatar
- [ ] Progress Bar
- [ ] Skeleton Loader

### Composite Components:
- [ ] Form Group (input + label + error)
- [ ] Table Row (expandable)
- [ ] Card with action
- [ ] Alert Banner
- [ ] Sidebar Nav Item
- [ ] Tab Navigation

---

## 🎨 DESIGN SYSTEM STRUCTURE (Figma Pages)

```
Page 1: Colors
  ├─ Color swatches
  ├─ Color palette (all 11 colors)
  └─ Usage guidelines

Page 2: Typography
  ├─ Font samples (H1-H6, Body, Small)
  ├─ Weight examples
  ├─ Line-height guide
  └─ Usage examples

Page 3: Components
  ├─ Buttons (all variants)
  ├─ Cards
  ├─ Forms (inputs, selects)
  ├─ Tables
  ├─ Modals
  ├─ Badges
  ├─ Icons
  └─ All interactive states

Page 4: Patterns
  ├─ Layouts (sidebar + main)
  ├─ Forms
  ├─ Empty states
  ├─ Loading states
  ├─ Error states
  └─ Success states

Page 5: Wireframes
  ├─ Dashboard
  ├─ Inventory List
  ├─ Create Remit (4 steps)
  ├─ Detail View
  ├─ Returns
  ├─ Reports
  └─ Settings

Page 6: Mockups (High-Fidelity)
  ├─ Dashboard (with colors)
  ├─ Inventory (with colors)
  ├─ Remit flow (4 screens)
  ├─ Returns flow (2 screens)
  └─ Reports (3 types)
```

---

## ✅ CHECKLIST ANTES DE IMPLEMENTAR

- [ ] Paleta de colores validada (colores exactos)
- [ ] Tipografía Inter descargada
- [ ] Componentes creados en Figma (main components)
- [ ] Color styles creados (11 colores)
- [ ] Type styles creados (H1-H6, body, small)
- [ ] Grid system (8px) aplicado
- [ ] Componentes testeados en 3 breakpoints
- [ ] Accessibility validada (contrast ratio > 4.5:1)
- [ ] Interacciones documentadas
- [ ] Handoff specs creadas

---

## 💻 IMPLEMENTACIÓN CSS (Ejemplo)

```css
/* Colors */
:root {
  --color-black-primary: #1a1a1a;
  --color-orange-accent: #ff6b35;
  --color-yellow-warning: #ffc107;
  --color-green-success: #28a745;
  --color-red-error: #dc3545;
  --color-blue-info: #17a2b8;
  --color-white: #ffffff;
  --color-gray-light: #f5f5f5;
  --color-gray-medium: #999999;
  --color-gray-dark: #444444;
  --color-border: #e0e0e0;
}

/* Typography */
:root {
  --font-family: 'Inter', 'Helvetica Neue', -apple-system, sans-serif;
  --font-size-h1: 36px;
  --font-size-h2: 24px;
  --font-size-h3: 18px;
  --font-size-body: 16px;
  --font-size-small: 12px;
  --font-size-kpi: 32px;
  
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
}

/* Spacing */
:root {
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
}

/* Border Radius */
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

/* Buttons */
.btn {
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.btn-primary {
  background: var(--color-orange-accent);
  color: var(--color-white);
}

.btn-primary:hover {
  background: #f55a24;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
}

.btn-secondary {
  background: var(--color-gray-light);
  color: var(--color-black-primary);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background: #efefef;
}
```

---

## 🎓 SIGUIENTE PASO

1. **Crea archivo Figma con componentes** basado en esta guía
2. **Aplica a wireframes** las 7 vistas principales
3. **Valida responsive** en 3 breakpoints
4. **Crea prototipos clickables** de flujos críticos
5. **Documenta handoff** para developers

---

**Estado:** Listo para Figma  
**Próximo:** Mockups en alta fidelidad  
**Timeline:** 1-2 semanas para completar

