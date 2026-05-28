import { useState } from "react";
import {
  Package,
  TrendingUp,
  Boxes,
  AlertCircle,
  Search,
  Plus,
  Download,
  Settings,
} from "lucide-react";
import { Button } from "./components/ds/Button";
import { Card } from "./components/ds/Card";
import { Badge } from "./components/ds/Badge";
import { Input } from "./components/ds/Input";
import { KpiCard } from "./components/ds/KpiCard";
import { Toast } from "./components/ds/Toast";
import { Modal } from "./components/ds/Modal";
import { Table } from "./components/ds/Table";
import { Select } from "./components/ds/Select";
import { Section } from "./components/showcase/Section";

const colors = [
  { name: "Black Primary", hex: "#1a1a1a", token: "black_primary" },
  { name: "Orange Accent", hex: "#ff6b35", token: "orange_accent" },
  { name: "Yellow Warning", hex: "#ffc107", token: "yellow_warning" },
  { name: "Green Success", hex: "#28a745", token: "green_success" },
  { name: "Red Error", hex: "#dc3545", token: "red_error" },
  { name: "Blue Info", hex: "#17a2b8", token: "blue_info" },
  { name: "White", hex: "#ffffff", token: "white" },
  { name: "Gray Light", hex: "#f5f5f5", token: "gray_light" },
  { name: "Gray Medium", hex: "#999999", token: "gray_medium" },
  { name: "Gray Dark", hex: "#444444", token: "gray_dark" },
  { name: "Border", hex: "#e0e0e0", token: "border" },
];

const typeScale = [
  { name: "H1 / Display", spec: "36px · Bold 700 · 1.2", sample: "Stock total inteligente", style: { fontSize: 36, fontWeight: 700, lineHeight: 1.2 } },
  { name: "H2 / Title", spec: "24px · Bold 700 · 1.3", sample: "Movimientos recientes", style: { fontSize: 24, fontWeight: 700, lineHeight: 1.3 } },
  { name: "H3 / Subtitle", spec: "18px · SemiBold 600 · 1.3", sample: "Resumen de inventario", style: { fontSize: 18, fontWeight: 600, lineHeight: 1.3 } },
  { name: "Body", spec: "16px · Regular 400 · 1.6", sample: "El stock se actualiza en tiempo real conforme se registran remitos y devoluciones.", style: { fontSize: 16, fontWeight: 400, lineHeight: 1.6 } },
  { name: "Small / Caption", spec: "12px · Regular 400 · 1.5 · #999", sample: "Actualizado hace 2 minutos", style: { fontSize: 12, fontWeight: 400, lineHeight: 1.5, color: "#999" } },
  { name: "KPI", spec: "32px · Bold 700 · 1.2", sample: "2,450", style: { fontSize: 32, fontWeight: 700, lineHeight: 1.2 } },
  { name: "Label", spec: "12px · Medium 500 · #444", sample: "ESTADO", style: { fontSize: 12, fontWeight: 500, color: "#444", letterSpacing: "0.04em" } },
];

const spacingScale = [
  { name: "xs", value: 8 },
  { name: "sm", value: 16 },
  { name: "md", value: 24 },
  { name: "lg", value: 32 },
  { name: "xl", value: 48 },
  { name: "2xl", value: 64 },
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("warehouse-a");

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#e0e0e0]">
        <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[6px] bg-[#1a1a1a] flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-[#ff6b35]" />
            </div>
            <div>
              <div className="text-[14px] font-bold leading-none">MSI STOCK</div>
              <div className="text-[11px] text-[#999] mt-0.5">Design System v1.0</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-[#444]">
            <a href="#foundations" className="hover:text-[#1a1a1a]">Foundations</a>
            <a href="#components" className="hover:text-[#1a1a1a]">Components</a>
            <a href="#patterns" className="hover:text-[#1a1a1a]">Patterns</a>
          </nav>
          <Button size="sm" variant="primary">
            <Download size={14} />
            Tokens
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#e0e0e0]">
        <div className="max-w-[1200px] mx-auto px-8 py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#ff6b35] mb-4">
              Design System · MSI Stock
            </div>
            <h1 className="text-[56px] font-bold leading-[1.05] tracking-tight">
              Un sistema visual <span className="text-[#ff6b35]">limpio</span>,
              corporativo y listo para escalar.
            </h1>
            <p className="text-[17px] text-[#444] mt-6 max-w-[560px] leading-[1.6]">
              Tokens de color, escala tipográfica Inter, espaciado de 8px y
              componentes prototipados — basado en el moodboard y la guía
              visual oficial.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="primary" size="lg">
                <Plus size={16} /> Explorar componentes
              </Button>
              <Button variant="secondary" size="lg">
                Ver guía visual
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-12 text-[13px] text-[#444]">
              <div>
                <div className="text-[24px] font-bold text-[#1a1a1a]">11</div>
                <div className="text-[12px] text-[#999]">tokens de color</div>
              </div>
              <div className="w-px h-10 bg-[#e0e0e0]" />
              <div>
                <div className="text-[24px] font-bold text-[#1a1a1a]">16+</div>
                <div className="text-[12px] text-[#999]">componentes</div>
              </div>
              <div className="w-px h-10 bg-[#e0e0e0]" />
              <div>
                <div className="text-[24px] font-bold text-[#1a1a1a]">8px</div>
                <div className="text-[12px] text-[#999]">grid base</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <KpiCard
                icon={<Boxes size={14} />}
                label="Stock Total"
                value="2,450"
                unit="materiales"
                trend="up"
                trendValue="+120 esta semana"
              />
              <KpiCard
                icon={<TrendingUp size={14} />}
                label="Movimientos"
                value="318"
                unit="hoy"
                trend="up"
                trendValue="+8.4%"
              />
              <KpiCard
                icon={<AlertCircle size={14} />}
                label="Bajo Stock"
                value="14"
                unit="ítems"
                trend="down"
                trendValue="-3 vs ayer"
              />
              <KpiCard
                icon={<Package size={14} />}
                label="Pendientes"
                value="27"
                unit="remitos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <Section
        id="foundations"
        eyebrow="01 · Foundations"
        title="Paleta de color"
        description="Negro principal con acento naranja vibrante, complementado por estados semánticos (success, warning, error, info) y una escala neutra para superficies y bordes."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colors.map((c) => (
            <div key={c.token} className="rounded-[8px] overflow-hidden border border-[#e0e0e0]">
              <div
                className="aspect-square"
                style={{
                  background: c.hex,
                  borderBottom: c.hex === "#ffffff" ? "1px solid #e0e0e0" : "none",
                }}
              />
              <div className="px-3 py-2.5 bg-white">
                <div className="text-[13px] font-semibold text-[#1a1a1a]">{c.name}</div>
                <div className="text-[11px] text-[#999] font-mono mt-0.5">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section
        eyebrow="02 · Foundations"
        title="Tipografía"
        description="Inter como familia primaria. Escala definida de H1 a Small, con pesos 400/500/600/700."
      >
        <div className="space-y-6">
          {typeScale.map((t) => (
            <div
              key={t.name}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline py-4 border-b border-[#e0e0e0] last:border-0"
            >
              <div className="md:col-span-3">
                <div className="text-[14px] font-semibold text-[#1a1a1a]">{t.name}</div>
                <div className="text-[12px] text-[#999] font-mono mt-1">{t.spec}</div>
              </div>
              <div className="md:col-span-9" style={t.style}>
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing */}
      <Section
        eyebrow="03 · Foundations"
        title="Spacing system · 8px base"
        description="Una sola fuente de verdad para márgenes, paddings y gaps."
      >
        <div className="space-y-4">
          {spacingScale.map((s) => (
            <div key={s.name} className="flex items-center gap-6">
              <div className="w-16 text-[13px] font-semibold text-[#1a1a1a]">{s.name}</div>
              <div className="w-16 text-[12px] text-[#999] font-mono">{s.value}px</div>
              <div
                className="h-6 rounded-[4px] bg-[#ff6b35]"
                style={{ width: s.value * 4 }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Buttons */}
      <Section
        id="components"
        eyebrow="04 · Components"
        title="Buttons"
        description="Primario para CTAs, secundario para acciones alternativas. Tres tamaños y estados disabled."
      >
        <Card variant="flat" className="!p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#999] mb-4">Variantes</div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primario</Button>
                <Button variant="secondary">Secundario</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Eliminar</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[#999] mb-4">Tamaños</div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Normal</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="mt-4">
                <Button fullWidth>
                  <Plus size={16} /> Full width
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Badges */}
      <Section
        eyebrow="05 · Components"
        title="Badges & estados"
        description="Etiquetas de estado para tablas, cards y filtros."
      >
        <Card variant="flat" className="!p-8">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="primary">Primario</Badge>
            <Badge variant="success">Disponible</Badge>
            <Badge variant="warning">Bajo stock</Badge>
            <Badge variant="error">Agotado</Badge>
            <Badge variant="info">En tránsito</Badge>
          </div>
        </Card>
      </Section>

      {/* Forms */}
      <Section
        eyebrow="06 · Components"
        title="Formularios"
        description="Inputs y selects con estados hover, focus, error y disabled."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px]">
          <Input label="MATERIAL" placeholder="Ej. Cable UTP cat6" />
          <Input label="CANTIDAD" type="number" defaultValue={120} hint="Unidades en stock" />
          <Input label="EMAIL" defaultValue="invalido@" error="Formato de email inválido" />
          <Input label="SKU (deshabilitado)" defaultValue="MSI-0042" disabled />
          <Select
            label="ALMACÉN"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: "warehouse-a", label: "Almacén Central" },
              { value: "warehouse-b", label: "Sucursal Norte" },
              { value: "warehouse-c", label: "Sucursal Sur" },
            ]}
          />
          <Select
            label="CATEGORÍA"
            placeholder="Seleccionar categoría"
            options={[
              { value: "cables", label: "Cables" },
              { value: "tools", label: "Herramientas" },
              { value: "safety", label: "Seguridad" },
            ]}
          />
        </div>
      </Section>

      {/* Cards */}
      <Section
        eyebrow="07 · Components"
        title="Cards"
        description="Cuatro variantes de superficie para estructurar contenido."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card variant="default">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#999]">Default</div>
            <h3 className="mt-2">Card básica</h3>
            <p className="text-[13px] text-[#444] mt-2 leading-relaxed">
              Borde sutil y sombra ligera, ideal para contenedores neutros.
            </p>
          </Card>
          <Card variant="elevated">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#999]">Elevated</div>
            <h3 className="mt-2">Card elevada</h3>
            <p className="text-[13px] text-[#444] mt-2 leading-relaxed">
              Más prominencia para CTAs y contenido destacado.
            </p>
          </Card>
          <Card variant="outlined">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#999]">Outlined</div>
            <h3 className="mt-2">Card outlined</h3>
            <p className="text-[13px] text-[#444] mt-2 leading-relaxed">
              Sin sombra, borde fuerte para layouts compactos.
            </p>
          </Card>
          <Card variant="flat">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-[#999]">Flat</div>
            <h3 className="mt-2">Card flat</h3>
            <p className="text-[13px] text-[#444] mt-2 leading-relaxed">
              Fondo gris sin borde, para secciones secundarias.
            </p>
          </Card>
        </div>
      </Section>

      {/* Table */}
      <Section
        eyebrow="08 · Components"
        title="Tabla de inventario"
        description="Patrón de tabla con header gris claro, hover en filas y badges de estado."
      >
        <div className="flex flex-col sm:flex-row gap-3 mb-4 items-stretch sm:items-center justify-between">
          <div className="flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-[6px] px-3 py-2 max-w-[320px] flex-1">
            <Search size={16} className="text-[#999]" />
            <input
              placeholder="Buscar material..."
              className="flex-1 bg-transparent outline-none text-[14px]"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              <Settings size={14} /> Filtros
            </Button>
            <Button variant="primary" size="sm">
              <Plus size={14} /> Nuevo material
            </Button>
          </div>
        </div>
        <Table
          columns={["SKU", "Material", "Categoría", "Stock", "Estado", "Almacén"]}
          rows={[
            ["MSI-0042", "Cable UTP Cat6", "Cables", "1,240", <Badge variant="success">Disponible</Badge>, "Central"],
            ["MSI-0118", "Taladro Bosch GSB", "Herramientas", "8", <Badge variant="warning">Bajo stock</Badge>, "Norte"],
            ["MSI-0223", "Casco de seguridad", "Seguridad", "0", <Badge variant="error">Agotado</Badge>, "Sur"],
            ["MSI-0309", "Switch 24p Cisco", "Redes", "42", <Badge variant="info">En tránsito</Badge>, "Central"],
            ["MSI-0511", "Cinta aislante 3M", "Consumibles", "560", <Badge variant="success">Disponible</Badge>, "Central"],
          ]}
        />
      </Section>

      {/* Toasts */}
      <Section
        eyebrow="09 · Components"
        title="Notificaciones"
        description="Toasts de feedback en cuatro variantes semánticas."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px]">
          <Toast
            variant="success"
            title="Remito creado"
            message="REM-2026-0421 registrado correctamente."
          />
          <Toast
            variant="warning"
            title="Stock bajo"
            message="3 materiales necesitan reposición."
          />
          <Toast
            variant="error"
            title="Error de sincronización"
            message="No se pudo conectar al servidor. Reintentando..."
          />
          <Toast
            variant="info"
            title="Actualización disponible"
            message="Hay una nueva versión del sistema."
          />
        </div>
      </Section>

      {/* Modal trigger */}
      <Section
        id="patterns"
        eyebrow="10 · Patterns"
        title="Modal / Dialog"
        description="Overlay con backdrop oscuro y modal centrado de máximo 500px."
      >
        <Card variant="flat" className="!p-10 text-center">
          <h3>Confirmar acción destructiva</h3>
          <p className="text-[14px] text-[#444] mt-2 max-w-[500px] mx-auto">
            El modal aparece sobre un backdrop al 50% de opacidad, con animación
            fade + scale de 200ms.
          </p>
          <div className="mt-6">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Abrir modal
            </Button>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#e0e0e0] py-12 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-[6px] bg-[#1a1a1a] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#ff6b35]" />
            </div>
            <div className="text-[13px] text-[#444]">
              MSI Stock Design System · 2026
            </div>
          </div>
          <div className="text-[12px] text-[#999]">
            Basado en la Guía Visual Final · Inter · 8px grid · #ff6b35
          </div>
        </div>
      </footer>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="¿Eliminar material?"
        primaryLabel="Sí, eliminar"
        secondaryLabel="Cancelar"
        onPrimary={() => setModalOpen(false)}
      >
        Esta acción no se puede deshacer. El material{" "}
        <strong>Cable UTP Cat6 (MSI-0042)</strong> se eliminará del inventario y
        de los reportes activos.
      </Modal>
    </div>
  );
}
