export type DsfrInputProps = {
  id?: string
  descriptionId?: string
  hint?: string
  isInvalid?: boolean
  isValid?: boolean
  isTextarea?: boolean
  isWithWrapper?: boolean
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string | number
  wrapperClass?: string
}

export type DsfrInputGroupProps = {
  descriptionId?: string
  hint?: string
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string | number
  placeholder?: string
  errorMessage?: string
  validMessage?: string
  wrapperClass?: string
}
