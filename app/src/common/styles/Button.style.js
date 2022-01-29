const ButtonStyle = {
    // The styles all Button's have in common
    baseStyle: {
        fontWeight: "bold",
        fontFamily: "button",
        borderRadius: "md",
        width: "100%",
        _hover: {
            backgroundColor: "transparent",
            border: "1px solid",
            boxShadow: "1px 2px #888888",
        }
    },
    variants: {
        white: {
            color: "ce_black",
            backgroundColor: "ce_white",
            _hover: {
                color: "ce_black",
                borderColor: "ce_white",
            }
        },
        maroon: {
            color: "ce_white",
            backgroundColor: "ce_mainmaroon",
            _hover: {
                color: "ce_mainmaroon",
                borderColor: "ce_mainmaroon",
            }
        },
        black: {
            color: "ce_white",
            backgroundColor: "ce_black",
            _hover: {
                color: "ce_black",
                borderColor: "ce_black",
            }
        },
        yellow: {
            color: "ce_white",
            backgroundColor: "ce_yellow",
            _hover: {
                color: "ce_yellow",
                borderColor: "ce_yellow",
            }
        },
        yellowOutline: {
            color: "ce_yellow",
            border: "1px solid",
            borderColor: "ce_yellow"
        }
    },
    // The default variant value
    defaultProps: {
        variant: "maroon",
        size: "sm",
    },
    sizes: {
        md: {
            h: 12,
            minW: 10,
            fontSize: "md",
            px: 4,
        },
    }
}

export default ButtonStyle;