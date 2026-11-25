# Portafolio Profesional - César Montevideo

> Full-Stack Developer & Fintech Architect especializado en Laravel 13, Filament v5, Livewire 4, Pasarelas de Pago e IA.

🌐 **Sitio Web en Vivo:** [https://portafolioce.netlify.app/](https://portafolioce.netlify.app/)

---

## 🚀 Opciones de Despliegue en Render

Tienes **2 formas** de subir este proyecto a [Render](https://render.com):

### Opción A (La más recomendada: Static Site - ¡NUNCA SE DUERME!)
1. Ve a tu panel de [Render Dashboard](https://dashboard.render.com).
2. Haz clic en **New +** y selecciona **Static Site**.
3. Conecta tu repositorio de GitHub: `cesar899/portafolio`.
4. En la configuración:
   - **Build Command:** (dejar vacío)
   - **Publish Directory:** `.` (un solo punto)
5. Haz clic en **Create Static Site**.
> **Ventaja:** Los Static Sites en Render son 100% gratuitos y **nunca se duermen**. No necesitas bots ni configuraciones adicionales.

---

### Opción B (Como Web Service con Bot Anti-Sleep)
Si prefieres crearlo como **Web Service** (Node.js):
1. En Render, crea un **Web Service** conectado a este repositorio.
2. Configuración:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
3. En la sección **Environment Variables**, agrega:
   - `APP_URL` = `https://tu-nombre.onrender.com` (la URL que te asigne Render).
4. El servidor trae un **bot interno** (`server.js`) que hace auto-ping cada 10 minutos para evitar que se suspenda.
5. *(Opcional)* En GitHub > Repositorio > Settings > Secrets > Actions, agrega `RENDER_APP_URL` con tu URL de Render para que GitHub Actions también haga ping automático cada 12 minutos.

---

## 📬 Contacto
- **Email:** montevideocesar599@gmail.com
- **WhatsApp:** +58 424-3561272
- **LinkedIn:** [cesar-montevideo](https://linkedin.com/in/cesar-montevideo-619456204)
