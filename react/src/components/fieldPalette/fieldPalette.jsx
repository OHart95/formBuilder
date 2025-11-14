// src/components/FieldPalette.jsx
import styles from './fieldPalette.module.css'

const FIELD_TYPES = [
  { type: 'text', label: 'Text Input' },
  { type: 'checkbox', label: 'Checkbox' },
  { type: 'textarea', label: 'Long Text' },
  // Add more later if time allows
];

const FieldPalette = ({ onAddField }) => (
  <div className={styles.palette}>
    <h4 className={styles.paletteHeader}>Field Types</h4>
    {FIELD_TYPES.map(field => (
      <button
        key={field.type}
        onClick={() => onAddField(field.type)}
        style={{ display: 'block', margin: '5px 0' }}
      >
        Add {field.label}
      </button>
    ))}
  </div>
);

export default FieldPalette;