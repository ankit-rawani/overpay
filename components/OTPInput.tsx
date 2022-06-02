import React, { CSSProperties, useCallback, useState, useRef, useLayoutEffect, memo } from "react";
import usePrevious from "../hooks/usePrevious";

export interface OTPInputProps {
    length: number;
    onChangeOTP: (otp: string) => any;
    autoFocus?: boolean;
    isNumberInput?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    inputStyle?: CSSProperties;
    inputClassName?: string;
}

export interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    focus?: boolean;
}

export const SingleOTPInputComponent = (props: SingleOTPInputProps) => {
    const { focus, autoFocus, ...rest } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const prevFocus = usePrevious(!!focus);

    useLayoutEffect(() => {
        if(inputRef.current) {
            if(focus && autoFocus) {
                inputRef.current.focus();
            }

            if(focus && autoFocus && focus !== prevFocus) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }, [autoFocus, focus, prevFocus]);

    return <input type="text" ref={inputRef} {...rest} />
}

const SingleInput = memo(SingleOTPInputComponent);

export const OTPInputComponent = ({
                length, 
                isNumberInput, 
                autoFocus, 
                disabled, 
                onChangeOTP, 
                inputClassName, 
                inputStyle, 
                ...rest
            } : OTPInputProps) => {
    const [activeInput, setActiveInput] = useState(0);
    const [otpValues, setOTPValues] = useState(Array<string>(length).fill(""));

    const focusInput = useCallback(
        (inputIndex: number) => {
            const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
            setActiveInput(selectedIndex);
        },
        [length]
    )

    const handleOnFocus = useCallback(
        (index: number) => () => {
            focusInput(index);
        },
        [focusInput]
    );

    const handleOnBlur = useCallback(()=> {
        setActiveInput(-1);
    }, []);

    const getRightValue = useCallback(
        (str: string) => {
            let changedValue = str;

            if(!isNumberInput || !changedValue) return changedValue;

            return Number(changedValue) >= 0 ? changedValue: '';
        },
        [isNumberInput]
    );

    const handleOtpChange = useCallback(
        (otp: string[]) => {
            const otpValue = otp.join('');
            onChangeOTP(otpValue);
        },
        [onChangeOTP]
    );

    const focusNextInput = useCallback(() => {
        focusInput(activeInput + 1);
    },
    [activeInput, focusInput]
    );

    const focusPrevInput = useCallback(() => {
        focusInput(activeInput - 1);
    },
    [activeInput, focusInput]
    );

    const changeCodeAtFocus = useCallback(
        (str: string) => {
            const updatedOTPValues = [...otpValues];
            updatedOTPValues[activeInput] = str[0] || "";
            setOTPValues(updatedOTPValues);
            handleOtpChange(updatedOTPValues);
        },
        [activeInput, handleOtpChange, otpValues]
    );

    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = getRightValue(e.currentTarget.value);
            if(!val) {
                e.preventDefault();
                return;
            }
            changeCodeAtFocus(val);
            focusNextInput();
        },
        [changeCodeAtFocus, focusNextInput, getRightValue]
    );

    const handleOnKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            const pressedKey = e.key;

            switch(pressedKey) {
                case 'Backspace':
                case 'Delete':{
                    e.preventDefault();
                    if(otpValues[activeInput]) {
                        changeCodeAtFocus('')
                    } else {
                        focusPrevInput();
                    }
                    break;
                }

                case 'ArrowLeft': {
                    e.preventDefault();
                    focusPrevInput();
                    break;
                }

                case 'ArrowRight': {
                    e.preventDefault();
                    focusNextInput();
                    break;
                }

                default: {
                    if(pressedKey.match(/^[^a-zA-Z0-9]$/)) {
                        e.preventDefault();
                    }
                    break;
                }
            }
        },
        [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
    );

    const handleOnPaste = useCallback(
        (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const pastedData = e.clipboardData
                .getData('text/plain')
                .trim()
                .slice(0, length - activeInput)
                .split('');
            
            if(pastedData) {
                let nextFocusIndex = 0;
                const updatedOTPValues = [...otpValues];
                updatedOTPValues.forEach((val, index) => {
                    if(index >= activeInput) {
                        const changedValue = getRightValue(pastedData.shift() || val);
                        if(changedValue) {
                            updatedOTPValues[index] = changedValue;
                            nextFocusIndex = index;
                        }
                    }
                });
                setOTPValues(updatedOTPValues);
                setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
            }
        },
        [activeInput, getRightValue, length, otpValues]
    );

    return (
        <div {...rest}>
            {
            Array(length)
                .fill("")
                .map((_, index) => (
                    <SingleInput
                        key={`SingleInput-${index}`}
                        focus={activeInput === index}
                        value={otpValues && otpValues[index]}
                        autoFocus={autoFocus}
                        onFocus={handleOnFocus(index)}
                        onChange={handleOnChange}
                        onKeyDown={handleOnKeyDown}
                        onBlur={handleOnBlur}
                        onPaste={handleOnPaste}
                        style={inputStyle}
                        className={inputClassName}
                        disabled={disabled}
                    />
                ))
            }
        </div>
    );
}

const OTPInput = memo(OTPInputComponent);
export default OTPInput;