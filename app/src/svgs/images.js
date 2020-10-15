import { memo } from 'react'

function SvgImages(props) {
  return (
    <svg className="svg imagesSvg" viewBox="0 -21 511.987 511" {...props}>
      <path d="M133.32 373.828c-34.152 0-64.53-21.867-75.562-54.422l-.746-2.453c-2.602-8.621-3.692-15.871-3.692-23.125V148.375L1.566 321.133c-6.656 25.41 8.512 51.754 33.961 58.773l329.88 88.344a48.935 48.935 0 0012.288 1.578c21.246 0 40.66-14.101 46.102-34.883l19.219-61.117zm0 0M191.988 149.828c23.532 0 42.664-19.137 42.664-42.668s-19.132-42.668-42.664-42.668S149.32 83.63 149.32 107.16s19.137 42.668 42.668 42.668zm0 0" />
      <path d="M458.652.492h-320C109.258.492 85.32 24.43 85.32 53.828v234.664c0 29.399 23.938 53.336 53.332 53.336h320c29.399 0 53.336-23.937 53.336-53.336V53.828c0-29.398-23.937-53.336-53.336-53.336zm-320 42.668h320c5.891 0 10.668 4.778 10.668 10.668v151.445l-67.39-78.636c-7.149-8.383-17.496-12.864-28.61-13.117-11.05.062-21.418 4.968-28.5 13.46l-79.234 95.102-25.813-25.75c-14.59-14.59-38.335-14.59-52.906 0l-58.879 58.86V53.827c0-5.89 4.778-10.668 10.664-10.668zm0 0" />
    </svg>
  );
}

export default memo(SvgImages);