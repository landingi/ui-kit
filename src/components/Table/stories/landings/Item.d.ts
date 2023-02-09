export type Item = {
  identifier: string
  name: string
  domainUrl: string
  isPublished: boolean
  isArchived: boolean
  createdAt: string
  testEnabled: boolean
  scheduleEnabled: boolean
  caminoLid: string | null
  newCaminoLid: string | null
  groupName: string | null
  thumbnailUrl: string | null
  masterHash: string
  smartSectionsCount: number
  accountUuid: string
  updatedAt: string
  groupUuid: string | null
}
