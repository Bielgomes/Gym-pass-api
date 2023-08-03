import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGyymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new FetchNearbyGyymsUseCase(gymsRepository)

  return useCase
}
