import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type HistoricalEvent = {
  id: string;
  title: string;
  year: string;
  description: string;
  isPremium?: boolean;
  imageSrc?: string;
  tags?: string[];
};

export type EraType = "ancient" | "medieval" | "renaissance" | "modern" | "contemporary";

type TimelineEraProps = {
  id: string;
  title: string;
  period: string;
  description: string;
  type: EraType;
  events: HistoricalEvent[];
  hasHistorianAccess: boolean;
};

const TimelineEra = ({
  id,
  title,
  period,
  description,
  type,
  events,
  hasHistorianAccess
}: TimelineEraProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`timeline-era ${type} mb-8`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-2xl font-serif font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1"
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      
      <p className="mb-4">{description}</p>
      
      {isExpanded && (
        <div className="space-y-6 mt-6">
          {events.map((event) => (
            <div key={event.id} className="border rounded-md p-4 bg-card">
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-medium">
                  {event.title}
                  {event.isPremium && !hasHistorianAccess && (
                    <Badge variant="outline" className="ml-2 bg-historian/10 text-historian border-historian">
                      Premium
                    </Badge>
                  )}
                </h4>
                <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">
                  {event.year}
                </span>
              </div>
              
              {event.tags && (
                <div className="flex flex-wrap gap-1 my-2">
                  {event.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              {event.imageSrc && (
                <div className="mt-3 mb-3 overflow-hidden rounded-md">
                  <img 
                    src={event.imageSrc || "/placeholder.svg"} 
                    alt={event.title}
                    className="w-full h-40 object-cover" 
                  />
                </div>
              )}
              
              <p className={`mt-2 ${event.isPremium && !hasHistorianAccess ? "line-clamp-2" : ""}`}>
                {event.description}
              </p>
              
              {event.isPremium && !hasHistorianAccess ? (
                <div className="mt-3">
                  <Link to="/shop">
                    <Button variant="outline" size="sm" className="text-historian">
                      Разблокировать с пропуском Историка
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-3">
                  <Link to={`/events/${event.id}`}>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
          
          <div className="text-center mt-4">
            <Link to={`/eras/${id}`}>
              <Button variant="outline">
                Все события эпохи {title}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineEra;