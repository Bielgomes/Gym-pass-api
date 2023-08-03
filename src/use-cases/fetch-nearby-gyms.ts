import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface FetchNearbyGyymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearbyGyymsUseCaseResponse {
  gyms: Gym[]
}

export class FetchNearbyGyymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyGyymsUseCaseRequest): Promise<FetchNearbyGyymsUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return { gyms }
  }
}
