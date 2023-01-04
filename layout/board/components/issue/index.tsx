import { uuid } from 'uuidv4'

import {
  Box,
  Icon,
  Typography
} from 'components/common'

import { AddIssue, IssueItem } from './component'

import * as Styles from './styles'

import { useBoard } from 'context/board'

export function Issue () {
  const {
    issues,
    setIssues,
    issueActive,
    setIssueActive
  } = useBoard()

  const handleAdd = (value?: string) => {
    if (!value) return

    setIssues(prevState => [
      ...prevState,
      {
        value,
        id: uuid()
      }
    ])
  }

  const renderIssues = issues.map(issue => (
    <li key={issue.id}>
      <IssueItem
        active={issueActive?.id === issue.id}
        label={issue.value}
        onActiveChange={() => issueActive?.id === issue.id ? setIssueActive(undefined) : setIssueActive(issue)}
      />
    </li>
  ))

  const renderIssueInfo = () => {
    if (issues.length === 0) return null

    return (
      <Box gap={1} marginTop={1}>
        <Typography>{`${issues.length + 1} issues`}</Typography>
        <Typography>{`${0} points`}</Typography>
      </Box>
    )
  }

  return (
    <Styles.Root>
      <Styles.Trigger aria-label="issues">
        <Icon name="list" color="white" size={25} />
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Box fullWidth justifyContent="space-between" alignItems="center">
            <Typography as="strong" color="heading" size="md" fontWeight="400">Issue</Typography>
            <Styles.Cancel>
              <Icon name="close" />
            </Styles.Cancel>
          </Box>
          {renderIssueInfo()}
          <Styles.List>
            {renderIssues}
          </Styles.List>
          <AddIssue onConfirm={handleAdd} />
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}
