import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import type { Direction } from '../navigation';

function cx(...tokens: Array<string | false | null | undefined>) {
  return tokens.filter(Boolean).join(' ');
}

interface UIContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function UIPage({ children, className, ...props }: UIContainerProps) {
  return (
    <div className={cx('face-page', className)} {...props}>
      {children}
    </div>
  );
}

export function UIPill({ children, className, ...props }: UIContainerProps) {
  return (
    <div className={cx('face-pill', className)} {...props}>
      {children}
    </div>
  );
}

export function UITitle({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cx('face-title', className)} {...props}>
      {children}
    </h2>
  );
}

export function UILead({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx('face-lead', className)} {...props}>
      {children}
    </p>
  );
}

export function UIBlock({ children, className, ...props }: UIContainerProps) {
  return (
    <div className={cx('face-block', className)} {...props}>
      {children}
    </div>
  );
}

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function UILangButton({ active, className, ...props }: UIButtonProps) {
  return <button type="button" className={cx('lang-btn', active && 'is-active', className)} {...props} />;
}

export function UITabButton({ active, className, ...props }: UIButtonProps) {
  return <button type="button" className={cx('mobile-tab', active && 'is-active', className)} {...props} />;
}

export function UIIconButton({ className, ...props }: UIButtonProps) {
  return <button type="button" className={cx('contact-eye', className)} {...props} />;
}


interface UIKeyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  pressed?: boolean;
  code: string;
  arrow?: string;
  direction?: Direction;
  label: string;
  className?: string;
  ariaKeyShortcuts?: string;
}

function KeyArrowIcon({ direction, fallback }: { direction?: Direction; fallback?: string }) {
  switch (direction) {
    case 'up':
      return <ArrowUp size={21} strokeWidth={2.4} aria-hidden />;
    case 'down':
      return <ArrowDown size={21} strokeWidth={2.4} aria-hidden />;
    case 'left':
      return <ArrowLeft size={21} strokeWidth={2.4} aria-hidden />;
    case 'right':
      return <ArrowRight size={21} strokeWidth={2.4} aria-hidden />;
    default:
      return <>{fallback ?? ''}</>;
  }
}

export function UIKeyButton({ active, pressed, code, arrow, direction, label, className, ...props }: UIKeyButtonProps) {
  const { ariaKeyShortcuts, ...buttonProps } = props;
  return (
    <button
      type="button"
      className={cx('nav-key', active && 'is-active', pressed && 'is-pressed', className)}
      aria-keyshortcuts={ariaKeyShortcuts}
      {...buttonProps}
    >
      <span className="key-meta">{code}</span>
      <span className="key-arrow">
        <KeyArrowIcon direction={direction} fallback={arrow} />
      </span>
      <span className="key-label">{label}</span>
    </button>
  );
}

export function UILink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={className} {...props} />;
}
