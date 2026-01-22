
function SimpleDialog({ text, isOpen, onClose }) {
  if (!isOpen) return null; // Only render when open

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 4,
          minWidth: 300,
          textAlign: 'center',
        }}
      >
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SimpleDialog;
