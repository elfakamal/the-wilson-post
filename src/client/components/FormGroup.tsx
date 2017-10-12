import * as React from 'react';

interface Props {
  field: string;
  label: string;
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLElement>) => void;
  children?: React.ReactElement<any>;
  style?: React.CSSProperties;
}

const FormGroup = ({ field, label, value, onChange, style, children }: Props): JSX.Element => (
  <div className="form-group">
    <div>
      <label htmlFor={field}>{label}</label>
    </div>
    {children ? React.cloneElement(children, { value, onChange, style }) : (
      <input value={value} onChange={onChange} style={style} />
    )}
  </div>
);

export default FormGroup;
