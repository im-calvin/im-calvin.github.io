import LaunchIcon from '@mui/icons-material/Launch'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

export default function ShareButton(props: ShareButtonProps) {
  return (
    <IconButton size="small" href={props.link} target="_blank">
      <LaunchIcon />
    </IconButton>
  )
}

export interface ShareButtonProps extends IconButtonProps {
  link: string
}
