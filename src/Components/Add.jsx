import { Fab, Tooltip } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

const Add = () => {
  return (
    <div>
      <Tooltip title="افزودن پست" aria-label="add">
        <Fab color="primary"
        sx={{
            position:"fixed",
            bottom:"10px",
            left:"10px"

        }}
        >
            <AddIcon/>
        </Fab>
      </Tooltip>
    </div>
  )
}

export default Add
