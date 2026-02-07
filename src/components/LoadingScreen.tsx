interface LoadingScreenProps {
  leaving?: boolean;
  label?: string;
}

export function LoadingScreen({ leaving = false, label = 'Loading experience...' }: LoadingScreenProps) {
  return (
    <div className={`app-loader${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite" aria-label={label}>
      <div className="app-loader__inner">
        <div className="app-loader__orbital" aria-hidden="true">
          <span className="app-loader__aura" />
          <span className="app-loader__core" />
          <span className="app-loader__ring app-loader__ring--outer" />
          <span className="app-loader__ring app-loader__ring--inner" />
          <span className="app-loader__orbit app-loader__orbit--a">
            <span className="app-loader__satellite app-loader__satellite--a" />
          </span>
          <span className="app-loader__orbit app-loader__orbit--b">
            <span className="app-loader__satellite app-loader__satellite--b" />
          </span>
          <span className="app-loader__orbit app-loader__orbit--c">
            <span className="app-loader__satellite app-loader__satellite--c" />
          </span>
        </div>
        <p className="app-loader__text">{label}</p>
        <p className="app-loader__subtitle">3D Cube Portfolio</p>
      </div>
    </div>
  );
}
