import React from "react";
import { WidgetProps } from "@rjsf/core";
import FormFile from "react-bootstrap/esm/FormFile";
import classNames from "classnames";

export interface FileWidgetProps extends WidgetProps {
  type?: string;
}

const FileWidget = ({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  label,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors = [],
}: FileWidgetProps) => {
  const _onChange = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const f = files ? files[0] : null;
    if (!f) return;
    const reader = new FileReader();
    reader.onload = e => {
      const dataUri = e?.target?.result;
      onChange(dataUri === "" ? options.emptyValue : dataUri);
    };
    reader.readAsDataURL(f);
  };

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
  const inputType =
    (type || schema.type) === "string" ? "text" : `${type || schema.type}`;

  return (
    <FormFile className="mb-0">
      <FormFile.Label
        className={classNames(
          rawErrors.length > 0 ? "text-danger" : "",
          "form-label"
        )}>
        {label || schema.title}
        {(label || schema.title) && required ? "*" : null}
      </FormFile.Label>
      <FormFile.Input
        id={id}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        className={classNames(
          rawErrors.length > 0 ? "is-invalid" : "",
          "form-control"
        )}
        type={inputType}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </FormFile>
  );
};

export default FileWidget;
